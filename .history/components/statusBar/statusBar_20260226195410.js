import styles from '@/components/statusBar/statusBar.module.css'

export default function StatusBar() {
    return (
        <div className={styles.statusBar_Container}>
            <img className={styles.statusBarImg} src='/statusBar.svg' alt="Status Bar" />
        </div>
    )
}