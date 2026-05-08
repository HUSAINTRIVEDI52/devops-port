'use client';

import { motion } from 'framer-motion';
import { Cloud, GitBranch, Container, Settings, Zap, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'AWS Cloud Infrastructure',
    description: 'Design and deploy scalable cloud infrastructure using AWS EC2, S3, VPC, RDS, Lambda. Complete infrastructure setup with best practices.',
    features: [
      'AWS architecture design',
      'EC2, S3, VPC, RDS setup',
      'Cost optimization',
      'Security & IAM configuration',
    ],
    price: 'Starting at $500',
    duration: '1-2 weeks',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Implementation',
    description: 'Automate your deployment workflow with Jenkins, GitHub Actions, GitLab CI. Reduce deployment time by 80%.',
    features: [
      'Jenkins/GitHub Actions setup',
      'Automated testing integration',
      'Blue-green deployments',
      'Rollback strategies',
    ],
    price: 'Starting at $400',
    duration: '1 week',
  },
  {
    icon: Container,
    title: 'Kubernetes & Docker',
    description: 'Containerize applications, set up Kubernetes clusters, implement auto-scaling and load balancing.',
    features: [
      'Docker containerization',
      'Kubernetes cluster setup',
      'Auto-scaling configuration',
      'Service mesh implementation',
    ],
    price: 'Starting at $600',
    duration: '2-3 weeks',
  },
  {
    icon: Settings,
    title: 'Infrastructure as Code',
    description: 'Terraform and Ansible automation for consistent, repeatable infrastructure provisioning.',
    features: [
      'Terraform modules',
      'Ansible playbooks',
      'State management',
      'Multi-environment setup',
    ],
    price: 'Starting at $450',
    duration: '1-2 weeks',
  },
  {
    icon: Zap,
    title: 'DevOps Consulting',
    description: 'Audit existing infrastructure, optimize costs, improve deployment speed, implement monitoring solutions.',
    features: [
      'Infrastructure audit',
      'Performance optimization',
      'Cost reduction strategies',
      'Best practices implementation',
    ],
    price: '$50-$100/hour',
    duration: 'Flexible',
  },
  {
    icon: DollarSign,
    title: 'Cloud Migration',
    description: 'Migrate your applications from on-premise to cloud or between cloud providers with zero downtime.',
    features: [
      'Migration strategy planning',
      'Data migration',
      'Zero-downtime deployment',
      'Post-migration support',
    ],
    price: 'Custom quote',
    duration: '2-4 weeks',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2 text-cyan-400 mb-4 font-mono text-sm tracking-widest">
              <span className="text-2xl">&gt;_</span>
              <span>FREELANCE_SERVICES</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono mb-4 tracking-tighter glitch" data-text="<SERVICES/>">
              &lt;SERVICES/&gt;
            </h2>
            <p className="text-gray-500 font-mono tracking-widest text-sm">AVAILABLE_FOR_HIRE()...</p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Professional DevOps engineering services to help your business scale efficiently.
              From cloud infrastructure to CI/CD automation, I deliver production-ready solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">Available for Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400">Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <span className="text-purple-400">Fast Turnaround</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing & Duration */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-500 uppercase">Pricing</span>
                  <span className="text-cyan-400 font-bold font-mono">{service.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase">Duration</span>
                  <span className="text-purple-400 font-mono text-sm">{service.duration}</span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Infrastructure?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your DevOps needs. Free 30-minute consultation to understand your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                Get Free Consultation
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="mailto:husaintrivedi@zohomail.in"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Email Me
              </a>
            </div>
            <p className="text-gray-500 text-sm font-mono mt-6">
              💼 Trusted by startups and enterprises • ⚡ Fast turnaround • 📚 Documentation included
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
