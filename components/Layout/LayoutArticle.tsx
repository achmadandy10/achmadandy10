import { ComponentProps, FC } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { GridItem } from '../GridItem';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

type LayoutArticleProps = ComponentProps<'div'> & {
  title: string;
};

export const LayoutArticle: FC<LayoutArticleProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <motion.article
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      variants={variants}
      transition={{
        duration: 0.4,
        type: 'easeInOut',
      }}
      style={{
        position: 'relative',
      }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Achmad Andy Dekanovy</title>
          </Head>
        )}
        {children}
        <GridItem.Style />
      </>
    </motion.article>
  );
};
