import type { Metadata } from 'next';
import React from 'react'
import css from './Profile.module.css';


export const metadata: Metadata = {
  title: 'NoteHub - Your Digital Note-Taking App',
  description:
    'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
  openGraph: {
    title: 'NoteHub - Your Digital Note-Taking App',
    description:
      'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
    url: 'https://notehub.com',
    siteName: 'NoteHub',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoteHub - Your Digital Note-Taking App',
    description:
      'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
};

const pageProfile = () => {
  return (
  <main className={css.mainContent}>
  <div className={css.profileCard}>
      <div className={css.header}>
	     <h1 className={css.formTitle}>Profile Page</h1>
	     <a src="" className={css.editProfileButton}>
	       Edit Profile
	     </a>
	   </div>
     <div className={css.avatarWrapper}>
      <img
        src="Avatar"
        alt="User Avatar"
        width={120}
        height={120}
        className={css.avatar}
      />
    </div>
    <div className={css.profileInfo}>
      <p>
        Username: your_username
      </p>
      <p>
        Email: your_email@example.com
      </p>
    </div>
  </div>
</main>

  )
}


export default pageProfile