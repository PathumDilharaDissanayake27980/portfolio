"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Inc.",
    image: "https://picsum.photos/100/100?random=1",
    quote:
      "This is an amazing portfolio! The design is clean and modern, and the animations are a nice touch. I would definitely recommend this developer to anyone looking for a new website.",
  },
  {
    name: "Jane Doe",
    title: "CTO, Another Inc.",
    image: "https://picsum.photos/100/100?random=2",
    quote:
      "I was really impressed with the quality of this portfolio. The code is clean and well-organized, and the website is fast and responsive. I would definitely work with this developer again.",
  },
  {
    name: "Peter Jones",
    title: "Lead Designer, A Third Inc.",
    image: "https://picsum.photos/100/100?random=3",
    quote:
      "This is one of the best portfolios I've seen in a while. The design is beautiful, the user experience is great, and the code is top-notch. I would highly recommend this developer to anyone.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-center text-muted-foreground mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
