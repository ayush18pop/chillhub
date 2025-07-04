// GitHub API Service - What data we can fetch from GitHub

export class GitHubService {
  constructor(token) {
    this.token = token;
    this.baseURL = "https://api.github.com";
  }

  // 1. USER PROFILE DATA
  async getUserProfile(username) {
    /*
    Fetches basic user information:
    - avatar_url (profile image)
    - name, bio, location, email
    - company, blog, twitter_username
    - public_repos, public_gists
    - followers, following
    - created_at, updated_at
    - hireable status
    */
    const response = await fetch(`${this.baseURL}/users/${username}`);
    return response.json();
  }

  // 2. REPOSITORIES DATA
  async getUserRepos(username, options = {}) {
    /*
    Fetches user's repositories:
    - name, description, language
    - stars, forks, watchers
    - topics (tags)
    - created_at, updated_at, pushed_at
    - homepage (live demo URL)
    - size, open_issues_count
    - license information
    - default_branch
    */
    const { sort = "updated", per_page = 100 } = options;
    const response = await fetch(
      `${this.baseURL}/users/${username}/repos?sort=${sort}&per_page=${per_page}`
    );
    return response.json();
  }

  // 3. LANGUAGES DATA
  async getRepoLanguages(username, repoName) {
    /*
    Fetches language statistics for a repository:
    Returns object like: { "JavaScript": 12345, "CSS": 5678, "HTML": 1234 }
    We can aggregate this across all repos to get overall language usage
    */
    const response = await fetch(
      `${this.baseURL}/repos/${username}/${repoName}/languages`
    );
    return response.json();
  }

  // 4. CONTRIBUTION EVENTS
  async getUserEvents(username) {
    /*
    Fetches recent public activity:
    - PushEvent (commits)
    - CreateEvent (repo/branch creation)
    - ForkEvent (forking repos)
    - IssuesEvent (opening/closing issues)
    - PullRequestEvent (PRs)
    - WatchEvent (starring repos)
    - ReleaseEvent (releases)
    */
    const response = await fetch(
      `${this.baseURL}/users/${username}/events/public`
    );
    return response.json();
  }

  // 5. STARRED REPOSITORIES
  async getUserStarred(username) {
    /*
    Fetches repositories the user has starred:
    - Shows user's interests
    - Can analyze to understand preferred technologies
    */
    const response = await fetch(`${this.baseURL}/users/${username}/starred`);
    return response.json();
  }

  // 6. FOLLOWERS/FOLLOWING
  async getUserFollowers(username) {
    /*
    Fetches user's followers list:
    - follower profiles
    - network analysis
    */
    const response = await fetch(`${this.baseURL}/users/${username}/followers`);
    return response.json();
  }

  async getUserFollowing(username) {
    /*
    Fetches users that the user follows
    */
    const response = await fetch(`${this.baseURL}/users/${username}/following`);
    return response.json();
  }

  // 7. GISTS
  async getUserGists(username) {
    /*
    Fetches user's public gists:
    - code snippets
    - files and content
    - comments and forks
    */
    const response = await fetch(`${this.baseURL}/users/${username}/gists`);
    return response.json();
  }

  // 8. REPOSITORY TOPICS/TAGS
  async getRepoTopics(username, repoName) {
    /*
    Fetches repository topics (tags):
    - technology tags
    - project categories
    */
    const response = await fetch(
      `${this.baseURL}/repos/${username}/${repoName}/topics`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    );
    return response.json();
  }

  // 9. COMMIT STATISTICS
  async getRepoCommitActivity(username, repoName) {
    /*
    Fetches commit activity data:
    - weekly commit counts
    - contribution patterns
    */
    const response = await fetch(
      `${this.baseURL}/repos/${username}/${repoName}/stats/commit_activity`
    );
    return response.json();
  }

  // 10. COMPREHENSIVE DATA AGGREGATION
  async getCompleteProfile(username) {
    try {
      // Fetch all available data
      const [profile, repos, events, starred, followers, following, gists] =
        await Promise.all([
          this.getUserProfile(username),
          this.getUserRepos(username),
          this.getUserEvents(username),
          this.getUserStarred(username),
          this.getUserFollowers(username),
          this.getUserFollowing(username),
          this.getUserGists(username),
        ]);

      // Aggregate language data from all repos
      const languagePromises = repos
        .slice(0, 20)
        .map((repo) =>
          this.getRepoLanguages(username, repo.name).catch(() => ({}))
        );
      const languages = await Promise.all(languagePromises);

      // Process and aggregate language statistics
      const languageStats = languages.reduce((acc, repoLangs) => {
        Object.entries(repoLangs).forEach(([lang, bytes]) => {
          acc[lang] = (acc[lang] || 0) + bytes;
        });
        return acc;
      }, {});

      // Get top languages by usage
      const topLanguages = Object.entries(languageStats)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([lang, bytes]) => ({
          name: lang,
          bytes,
          percentage: (
            (bytes / Object.values(languageStats).reduce((a, b) => a + b, 0)) *
            100
          ).toFixed(1),
        }));

      // Analyze repository topics for tech stack
      const allTopics = repos.flatMap((repo) => repo.topics || []);
      const topicCounts = allTopics.reduce((acc, topic) => {
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
      }, {});

      return {
        profile,
        repos: repos.slice(0, 20), // Top 20 repos
        topLanguages,
        techTopics: Object.entries(topicCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 15)
          .map(([topic, count]) => ({ name: topic, count })),
        recentActivity: events.slice(0, 10),
        starredRepos: starred.slice(0, 10),
        socialStats: {
          followers: followers.length,
          following: following.length,
          gists: gists.length,
        },
        contributionPattern: this.analyzeContributionPattern(events),
      };
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      throw error;
    }
  }

  // Helper method to analyze contribution patterns
  analyzeContributionPattern(events) {
    const commitEvents = events.filter((event) => event.type === "PushEvent");
    const commitDays = commitEvents.reduce((acc, event) => {
      const day = new Date(event.created_at).getDay();
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});

    const hours = commitEvents.reduce((acc, event) => {
      const hour = new Date(event.created_at).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});

    return { commitDays, commitHours: hours };
  }
}

// Usage example:
/*
const githubService = new GitHubService(process.env.GITHUB_TOKEN);
const userData = await githubService.getCompleteProfile('username');

// For GitHub Contribution Graph, you'll need to use:
// 1. GitHub's GraphQL API (more complex, requires token)
// 2. Third-party services like GitHub Contributions API
// 3. Scraping (not recommended)
// 4. Libraries like @github/contributions-graph

// Example GraphQL query for contribution data:
const contributionQuery = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;
*/

export default GitHubService;
