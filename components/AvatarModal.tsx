'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './AvatarModal.module.css'

export default function AvatarModal() {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <>
      <Image
        className={styles.avatar}
        src="/images/antonio.webp"
        alt="Portrait of Antonio Guerriere"
        width={120}
        height={120}
        priority
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className={styles.backdrop} onClick={close} role="dialog" aria-modal="true">
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              className={styles.modalImage}
              src="/images/antonio.webp"
              alt="Portrait of Antonio Guerriere"
              width={800}
              height={800}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
