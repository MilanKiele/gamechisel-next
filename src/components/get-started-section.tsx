"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export function GetStartedSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lg:text-3xl flex items-center justify-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              Ready to Get Started?
            </CardTitle>
            <CardDescription className="text-lg">
              Join the GameChisel community and start building amazing Unity projects with our open source tools. 
              Start your development journey today.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button asChild size="lg" className="px-8 py-4 bg-primary hover:bg-primary/90">
                <Link href="/download">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4">
                <Link href="/github">
                  View Repository
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Open source • Free to use • Community driven
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Add default export for compatibility
export default GetStartedSection;