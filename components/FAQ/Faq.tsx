"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./faq.css";
import { FaqQuestions } from "@/lib/FaqQuestions";

const Accordion = ({
  i,
  expanded,
  setExpanded,
}: {
  i: number;
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>;
}) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.article
        initial={false}
        animate={{ backgroundColor: isOpen ? "#E5E6E6" : "#2c3842" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={`question ${isOpen ? "active_question" : ""}`}
      >
        {FaqQuestions.questions.map((item, index) => (
          <div key={index} className="text-xl">
            {i === index ? (
              <h3 className={`${isOpen ? "text-sec" : "text-sec"}`}>
                    {item.question}
              </h3>
            ) : (
              ""
            )}
          </div>
        ))}
      </motion.article>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              className="content-placeholder"
            >
              {FaqQuestions.questions.map((item, index) => (
                <div key={index} className="">
                  {i === index ? (
                    <div className="text-black" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Faq = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="mx-auto font-Inter bg-sec rounded-lg  overflow-hidden">
      {accordionIds.map((i) => (
        <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
      ))}
    </div>
  );
};

const accordionIds = [0, 1, 2, 3, 4];

export default Faq;
