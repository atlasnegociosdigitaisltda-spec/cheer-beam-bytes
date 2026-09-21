import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/product";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[860px] px-4 py-12 lg:py-16" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="mb-6 text-center text-2xl font-bold uppercase text-foreground lg:text-3xl"
      >
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
