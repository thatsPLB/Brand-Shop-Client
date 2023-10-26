import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "Does MidGen Tech Provide World Wide Shipping?",
            content: `We deliver over 140 countriest. We also try to ship your product as soon as possible.`,
        },
        {
            title: "What is the Shipping Charge?",
            content: `The shipping charge of MidGen Tech is depends on where you are. Although the lowest shipping charge is $1 and the highest cost is $100. But remember that the shipping cost depends on your location.`
        },
        {
            title: "How is the Product Quality?",
            content: `We try to provide the best product quality. To ansure about it you can see our customers review. Although if you have any kind of objection about our product, you can tell us that. We'll be happy to listen from you.`,
        },
        {
            title: "What are the Brands that MidGen Tech Has?",
            content:`The brands we has is listed on the top of the website. You can see that from there.`, 
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",

    expandIcon: "+",
    collapseIcon: "-",
    // tabFocus: true
};

function FAQ() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <div className="mt-4 mb-4">
        <div className="bg-white">
            <h1 className="pt-4 tracking-tighter text-center text-4xl font-bold font-mono">F.A.Q</h1>
        </div>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
      </div>
    </>
  );
}

export default FAQ;
