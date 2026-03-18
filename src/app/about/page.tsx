import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Code, Wind, Palette, Database, Star, Cog, Bot, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Avatar className="w-64 h-64">
            <AvatarImage src="https://github.com/PathumDilharaDissanayake.png" alt="Profile" />
            <AvatarFallback>PD</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Pathum Dilhara Dissanayake</h1>
          <p className="text-muted-foreground text-lg">
            An enthusiastic Computer Engineering undergraduate at the University of Peradeniya with a strong foundation in software development, embedded systems, networking, and AI-driven solutions. Experienced in building intelligent systems, such as a heart failure prediction model and a real-time smart canteen management system. Currently exploring next-generation wireless technologies through research on Wi-Fi 7 security. Dedicated to creating practical, data-driven solutions that improve everyday efficiency and security.
          </p>
          <div>
            <h2 className="text-2xl font-bold">Socials</h2>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/PathumDilharaDissanayake" passHref>
                <Button variant="outline">GitHub</Button>
              </Link>
              <Link href="https://www.linkedin.com/in/pathum-dissanayaka-60364817a/" passHref>
                <Button variant="outline">LinkedIn</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>BSc Engineering (Hons) Computer Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p>University of Peradeniya</p>
              <p>2022 - 2026</p>
              <p>Current GPA: 3.79/4.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>G.C.E. Advanced Level</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Central College, Anuradhapura</p>
              <p>2020</p>
              <p>3 A's</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>G.C.E. Ordinary Level</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Central College, Anuradhapura</p>
              <p>2017</p>
              <p>9 A's</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Casual Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>University of Peradeniya</p>
              <p>2023 - 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills and Interests</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code />
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            <div className="space-y-2">
              <p>Java, Python, JavaScript, SQL, C++</p>
              <Progress value={90} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Cog/>
              <h3 className="text-xl font-bold">Frameworks</h3>
            </div>
            <div className="space-y-2">
              <p>React, Flutter, Spring Boot, Spring MVC, Spring Cloud, Microservices</p>
              <Progress value={85} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Database />
              <h3 className="text-xl font-bold">Cloud/Databases</h3>
            </div>
            <div className="space-y-2">
              <p>MySQL, PostgreSQL, MongoDB</p>
              <Progress value={85} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}