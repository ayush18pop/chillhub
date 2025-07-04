import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/magicui/marquee';
import { TechItem } from '@/components/TechLogos';

export function PortfolioPage() {
  const { username } = useParams(); // Get username from URL
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        
        // This will call your backend API
        // const response = await fetch(`/api/portfolio/${username}`);
        // const data = await response.json();
        
        // Placeholder data for now
        const mockData = {
          githubData: {
            name: "John Doe",
            avatar_url: "https://github.com/github.png",
            bio: "Software Developer passionate about creating amazing experiences",
            location: "San Francisco, CA",
            public_repos: 42,
            followers: 150,
            following: 80,
          },
          aiGeneratedDescription: "A passionate full-stack developer with expertise in modern web technologies. Known for building scalable applications and contributing to open-source projects. Combines technical excellence with creative problem-solving to deliver exceptional user experiences.",
          techStack: {
            languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
            frameworks: ["React", "Node.js", "Express", "Next.js", "Django"],
            tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"],
          },
          workExperience: [
            {
              company: "Tech Corp",
              position: "Senior Full Stack Developer",
              startDate: "2022-01-01",
              endDate: null,
              isCurrent: true,
              description: "Leading development of scalable web applications",
              technologies: ["React", "Node.js", "MongoDB"]
            },
            {
              company: "StartupXYZ",
              position: "Frontend Developer",
              startDate: "2020-06-01",
              endDate: "2021-12-31",
              isCurrent: false,
              description: "Built responsive user interfaces and improved user experience",
              technologies: ["React", "TypeScript", "Redux"]
            }
          ],
          education: [
            {
              institution: "University of Technology",
              degree: "Bachelor of Science",
              field: "Computer Science",
              startDate: "2016-09-01",
              endDate: "2020-05-31",
              gpa: "3.8",
            }
          ],
          portfolioSettings: {
            theme: "dark",
            primaryColor: "#3b82f6"
          }
        };
        
        setPortfolioData(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchPortfolioData();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-lg text-foreground">Loading portfolio...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-destructive">Error: {error}</div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-lg text-foreground">Portfolio not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="mb-6">
            <img
              src={portfolioData.githubData.avatar_url}
              alt={portfolioData.githubData.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-border shadow-lg"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {portfolioData.githubData.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">@{username}</p>
          {portfolioData.githubData.location && (
            <p className="text-muted-foreground mb-4">📍 {portfolioData.githubData.location}</p>
          )}
          
          {/* GitHub Stats */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{portfolioData.githubData.public_repos}</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{portfolioData.githubData.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{portfolioData.githubData.following}</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
          </div>
        </div>

        {/* AI Generated Description */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {portfolioData.aiGeneratedDescription}
            </p>
          </CardContent>
        </Card>

        {/* Tech Stack - Two Marquee Rows with MagicUI */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Tech Stack</h2>
            
            {/* Languages Marquee */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground text-center">Programming Languages</h3>
              <Marquee pauseOnHover className="[--duration:20s]" >
                {portfolioData.techStack.languages.map((lang, index) => (
                  <TechItem
                    key={index}
                    name={lang}
                    className="mx-4 bg-primary/20 text-primary-foreground border-primary/40"
                  />
                ))}
              </Marquee>
            </div>

            {/* Frameworks & Tools Marquee */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground text-center">Frameworks & Tools</h3>
              <Marquee reverse pauseOnHover className="[--duration:25s]">
                {[...portfolioData.techStack.frameworks, ...portfolioData.techStack.tools].map((tech, index) => (
                  <TechItem
                    key={index}
                    name={tech}
                    className="mx-4 bg-accent/20 text-accent-foreground border-accent/40"
                  />
                ))}
              </Marquee>
            </div>
          </CardContent>
        </Card>

        {/* GitHub Contribution Grid Placeholder */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">GitHub Contributions</h2>
            <div className="bg-muted h-40 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">GitHub Contribution Grid will be displayed here</p>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Work Experience</h2>
            <div className="space-y-6">
              {portfolioData.workExperience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{job.position}</h3>
                    <span className="text-sm text-muted-foreground">
                      {job.isCurrent ? 'Current' : new Date(job.endDate).getFullYear()}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{job.company}</p>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted text-foreground px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Education</h2>
            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree} in {edu.field}</h3>
                  <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
