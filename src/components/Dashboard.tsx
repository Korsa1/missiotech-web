'use client';

import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell
} from 'recharts';

// Sample data for charts
const missionImpactData = [
  { month: 'Jan', impact: 4000, target: 3000 },
  { month: 'Feb', impact: 3000, target: 3000 },
  { month: 'Mar', impact: 5000, target: 3000 },
  { month: 'Apr', impact: 2780, target: 3000 },
  { month: 'May', impact: 4890, target: 3000 },
  { month: 'Jun', impact: 3390, target: 3000 },
  { month: 'Jul', impact: 4490, target: 3000 },
];

const technologyAdoptionData = [
  { name: 'AI Solutions', value: 35 },
  { name: 'VR Training', value: 25 },
  { name: 'XR Applications', value: 20 },
  { name: 'Consulting', value: 20 },
];

const userEngagementData = [
  { month: 'Jan', users: 1200, sessions: 1800 },
  { month: 'Feb', users: 1900, sessions: 2400 },
  { month: 'Mar', users: 2600, sessions: 3200 },
  { month: 'Apr', users: 2400, sessions: 3000 },
  { month: 'May', users: 2700, sessions: 3300 },
  { month: 'Jun', users: 3500, sessions: 4100 },
  { month: 'Jul', users: 3800, sessions: 4600 },
];

const successMetricsData = [
  { name: 'Efficiency', before: 40, after: 80 },
  { name: 'Accuracy', before: 30, after: 75 },
  { name: 'Engagement', before: 50, after: 85 },
  { name: 'Retention', before: 45, after: 70 },
  { name: 'Satisfaction', before: 55, after: 90 },
];

const COLORS = ['#0A6E8A', '#00B8D4', '#003B4F', '#E6F7FA'];

const Dashboard = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Data Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore interactive visualizations of MissioTech's impact, technology adoption, 
            and success metrics across various organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission Impact Chart */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Mission Impact Metrics</h3>
            <p className="text-gray-600 mb-4">Monthly impact measurements against targets</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={missionImpactData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="impact" 
                    stroke="#0A6E8A" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#003B4F" 
                    strokeWidth={2}
                    strokeDasharray="5 5" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Technology Adoption Chart */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Technology Adoption</h3>
            <p className="text-gray-600 mb-4">Distribution of technology solutions implemented</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={technologyAdoptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {technologyAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* User Engagement Chart */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">User Engagement</h3>
            <p className="text-gray-600 mb-4">Monthly user and session growth</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={userEngagementData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stackId="1"
                    stroke="#0A6E8A" 
                    fill="#0A6E8A" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sessions" 
                    stackId="1"
                    stroke="#00B8D4" 
                    fill="#00B8D4" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Success Metrics Chart */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
            <p className="text-gray-600 mb-4">Before and after implementation comparison</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={successMetricsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="before" fill="#003B4F" name="Before MissioTech" />
                  <Bar dataKey="after" fill="#00B8D4" name="After MissioTech" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 italic mb-6">
            * All data shown is representative and can be customized with your organization's actual metrics.
          </p>
          <button className="btn-primary">
            Request Custom Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
