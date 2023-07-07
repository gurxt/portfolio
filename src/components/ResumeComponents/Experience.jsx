/*
Work Experience

Freelance (2020-2022)
Shopify platform website creation and maintenance

•	Designed user-friendly, visually appealing Shopify website for diverse businesses, significantly enhancing their online presence and e-commerce capabilities.
•	Utilized advanced features of the Shopify platform for customization, SEO optimization, and integration with third-party applications, resulting in improved website performance and increased customer engagement.

Walmart (2018-2021)
3155 Argentia Rd, Meadowvale, Ontario
Online Orders Associate

McDonalds (2016-2018)
6650 Meadowvale Town Center Circle, Mississauga, Ontario
Overnight Manager

*/

import Scrollbars from "rc-scrollbars"
import Walmart from "/src/assets/walmart.png"
import McDonalds from "/src/assets/mcdonalds.png"
import Shopify from "/src/assets/shopify.png"

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-item">
        <div className="flex flex-col w-1/2 bg-slate-200 rounded-l-xl">
          <h3 className="text-center text-2xl font-bold h-1/6 py-2 bg-green-300 rounded-tl-xl">Shopify Freelancer</h3>
          <Scrollbars>
          <ul className="pl-6 list-disc text-lg">
            <li>Website creator and maintainer (2020-2022)</li>
            <li>Designed user-friendly, visually appealing Shopify website for diverse businesses, significantly enhancing their online presence and e-commerce capabilities.</li>
            <li>Utilized advanced features of the Shopify platform for customization, SEO optimization, and integration with third-party applications, resulting in improved website performance and increased customer engagement.</li>
          </ul>
          </Scrollbars>
        </div>
        <div className="flex justify-center w-1/2 bg-green-300 rounded-r-xl">
          <img src={Shopify} className="w-64 h-64 object-contain" />
        </div>
      </div>
      <div className="experience-item">
        <div className="flex items-center justify-center w-1/2 bg-blue-300 rounded-l-xl">
          <img src={Walmart} className="w-64 h-64 object-contain" />
        </div>
        <div className="flex flex-col w-1/2 bg-slate-200 rounded-r-xl">
          <h3 className="text-center text-2xl font-bold h-1/6 py-2 bg-blue-300 rounded-tr-xl">Online Orders Associate</h3>
          <Scrollbars>
          <ul className="pl-6 list-disc text-lg">
            <li>2018-2021</li>
            <li>Managed and executed online customer orders with a high degree of accuracy and timeliness.</li>
            <li>Leveraged Walmart’s e-commerce platform to effectively manage stock, update product information, and track customer orders.</li>
            <li>Collaborated with the inventory management team to ensure seamless integration between in-store stock levels and online availability.</li>
          </ul>
          </Scrollbars>
        </div>
      </div>
      <div className="experience-item">
        <div className="flex flex-col w-1/2 bg-slate-200 rounded-l-xl">
          <h3 className="text-center text-2xl font-bold h-1/6 py-2 bg-red-300 rounded-tl-xl">Overnight Manager</h3>
          <Scrollbars>
          <ul className="pl-6 list-disc text-lg">
            <li>2016-2018</li>
            <li>Oversaw nightly operations in a fast-paced environment, ensuring high-quality serve and maintaining McDonald’s standard for cleanliness and food safety during the overnight shift.</li>
            <li>Administered nightly payroll operations, ensuring accuracy and timely payment, while maintaining strict adherence to company policies and compliance with employment laws</li>
            <li>Demonstrated exceptional problem-solving and conflict resolution skills, effectively addressing, and resolving any customer issues or complaints during overnight operations.</li>
          </ul>
          </Scrollbars>
        </div>
        <div className="flex justify-center w-1/2 bg-red-300 rounded-r-xl">
          <img src={McDonalds} className="w-64 h-64 object-contain" />
        </div>
      </div>
    </section>
  )
}