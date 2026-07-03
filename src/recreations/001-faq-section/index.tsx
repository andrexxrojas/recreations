import { useState } from "react";
import styles from "./styles.module.css";
import accordionData from "./data";

// Icon set from Phosphor Icons
import { PlusIcon } from "@phosphor-icons/react";

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {accordionData.map((item, index) => {
          const isOpen = activeId === item.id;

          return (
            <article
              key={item.id}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
            >
              <button
                className={styles.header}
                onClick={() => handleToggle(item.id)}
              >
                <div className={styles.left}>
                  <span className={styles.number}>
                    {(index + 1).toString()}
                  </span>

                  <h3 className={styles.title}>{item.title}</h3>
                </div>
                <div className={styles.right}>
                  <span className={styles.icon}>
                    <PlusIcon size={50} weight="thin" />
                  </span>
                </div>
              </button>

              <div className={styles.content}>
                <div className={styles.contentInner}>
                  <p className={styles.contentText}>{item.content}</p>
                </div>
              </div>
            </article>
          )
      })}
      </div>
    </section>
  )
}
