'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from '../components/ProjectCard';
import { useEffect } from 'react';

export default function Home() {
  const { t, ready } = useTranslation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Translations ready:', ready);
      console.log('Translations:', t('name'), t('skillsList', { returnObjects: true }));
    }
  }, [ready, t]);

  if (!ready) {
    return <div>Loading translations....</div>;
  }

  const skillsList = (t('skillsList', { returnObjects: true }) as string[]) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section className="text-center bg-light-primary dark:bg-dark-primary p-8 rounded-xl shadow-soft animate-fade-in">
        <Image
          src="/images/profile.jpg"
          alt={t('name')}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-4xl font-bold mb-2">{t('name')}</h1>
        <p className="text-xl mb-4">{t('title')}</p>
        <p>{t('education')}</p>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">{t('about')}</h2>
        <p>{t('description')}</p>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">{t('skills')}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.isArray(skillsList) ? (
            skillsList.map((skill: string, index: number) => (
              <li key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-soft">
                {skill}
              </li>
            ))
          ) : (
            <li className="text-red-500">Skills not available</li>
          )}
        </ul>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">{t('projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title={t('project1.title')}
            description={t('project1.description')}
            image="/images/webmapping.jpg"
          />
        </div>
      </section>
    </motion.div>
  );
}