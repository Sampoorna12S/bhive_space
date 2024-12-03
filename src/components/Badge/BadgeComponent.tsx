import React from 'react';
import './BadgeComponent.css';
import { Badge } from 'antd';

interface badgeProps {
  content: string;
  color: string;
  className?: string;
}

function BadgeComponent({ content, color, className }: badgeProps) {

  return (<Badge count={content} color={color} className={className}></Badge>);
}

export default BadgeComponent;
