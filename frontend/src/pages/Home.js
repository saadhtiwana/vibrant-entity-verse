
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Book, Users, Zap, Star, ArrowRight, Plus } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: 'Interactive Stories',
      description: 'Create branching narratives where readers make choices that shape the story.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Collaborative Writing',
      description: 'Work together with other writers to create amazing stories.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Dynamic Characters',
      description: 'Build rich character profiles that evolve throughout your stories.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: 'Community Ratings',
      description: 'Get feedback from readers and improve your storytelling skills.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Interactive Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build branching narratives where every choice matters. 
            Collaborate with writers and engage readers in immersive storytelling experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <>
                <Link to="/create-story" className="btn btn-primary btn-lg">
                  <Plus className="w-5 h-5" />
                  Create Your Story
                </Link>
                <Link to="/stories" className="btn btn-outline btn-lg">
                  <Book className="w-5 h-5" />
                  Browse Stories
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/stories" className="btn btn-outline btn-lg">
                  <Book className="w-5 h-5" />
                  Browse Stories
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Story Builder?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides everything you need to create engaging, 
              interactive stories that captivate your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-xl text-gray-600">Stories Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-xl text-gray-600">Active Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-xl text-gray-600">Writers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of writers who are already creating amazing interactive stories.
          </p>
          
          {!isAuthenticated && (
            <Link to="/register" className="btn btn-secondary btn-lg">
              Join Story Builder Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
