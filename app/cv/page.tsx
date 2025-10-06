'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function CV() {
  const { t, ready } = useTranslation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('CV Translations ready:', ready);
      console.log('CV Translations:', t('name'), t('skillsList', { returnObjects: true }));
    }
  }, [ready, t]);

  if (!ready) {
    return <div>Loading translations...</div>;
  }

  const skillsList = (t('skillsList', { returnObjects: true }) as string[]) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft print:bg-white print:shadow-none"
    >
      <header className="text-center no-print">
        <h1 className="text-3xl font-bold">{t('name')}</h1>
        <p>{t('title')} | {t('education')}</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('contact')}</h2>
        <p>Email: jameskeumouo@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/james-keumouo-332b992b5/</p>
        <p>GitHub: https://github.com/DIROIL</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('summary')}</h2>
        <p>{t('description')}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('skills')}</h2>
        <ul className="list-disc pl-6">
          {Array.isArray(skillsList) ? (
            skillsList.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))
          ) : (
            <li>Skills not available</li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('experience')}</h2>
        <p>Add your experience here...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('projects')}</h2>
        <ul className="list-disc pl-6">
          <li>{t('project1.title')}: {t('project1.description')}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t('education')}</h2>
        <p>{t('education')}</p>
      </section>

      <button onClick={() => window.print()} className="no-print bg-blue-500 text-white px-4 py-2 rounded">
        {t('printCV')}
      </button>
    </motion.div>
  );
}