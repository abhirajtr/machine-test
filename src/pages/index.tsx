import React from 'react';
import { Button, Card } from 'antd';
import CreateJob from '@src/assets/icons/create_job_icon.svg';
import AddClients from '@src/assets/icons/add_clients_icon.svg';
import ManageEmployees from '@src/assets/icons/manage_employes_icon.svg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const navigate = useNavigate();

  const cards = [
    {
      title: 'Create a Job post',
      icon: <CreateJob />,
      buttonText: 'CREATE JOB',
      link: '/create-job',
    },
    {
      title: 'Add your Clients',
      icon: <AddClients />,
      buttonText: 'ADD CLIENTS',
      link: '/add-clients',
    },
    {
      title: 'Manage your Employees',
      icon: <ManageEmployees />,
      buttonText: 'INVITE USERS',
      link: '/users',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">Welcome User</h1>
      <p className="text-gray-500 mb-8 text-center max-w-lg">
        Explore the features designed to streamline your experience. Get started by creating a job post,
        adding clients, or managing your team efficiently!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-y-2 px-8 rounded-xl"
          >
            <div className="flex flex-col items-center justify-between h-full gap-3">
              <p className="text-sm text-gray-500 text-center">{card.title}</p>
              {card.icon}
              <Button type="primary" onClick={() =>navigate(card.link)}>{card.buttonText}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
