import React from 'react'
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
const About = () => {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>Overview:</Timeline.Title>
          <Timeline.Body>
          StockPulse, an Inventory Management System (IMS), serves as a digital solution tailored to efficiently oversee and control a company's stock of products or goods. This comprehensive system automates and centralizes the tracking process, ensuring businesses maintain accurate and real-time information about their inventory.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title>Key Features:</Timeline.Title>
          <Timeline.Body>
          StockPulse incorporates essential features, including real-time inventory tracking, intuitive product categorization, efficient barcode scanning, and automated notifications for timely reorders. The system empowers businesses with seamless management of stock levels, mitigating the risk of stockouts or overstock situations. Additionally, StockPulse facilitates easy manipulation of data, allowing for tasks like creating, updating, and deleting product information.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title>Benefits and Impact:</Timeline.Title>
          <Timeline.Body>
          The implementation of StockPulse brings forth numerous advantages, such as heightened operational efficiency, reduced manual errors, and optimal cost management through precise control of stock levels. With robust reporting and analytics, the system provides valuable insights, empowering strategic decision-making. StockPulse significantly contributes to streamlined business processes, elevated accuracy, and increased overall productivity.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
    
  )
}

export default About