import styles from '@/components/statusBar/status-bar.module.css'

export default function StatusBar() {
    return (
        <div className={styles.statusBar_Container}>
            <img className={styles.statusBarImg} src='\statusBar.svg' />
        </div>
    )
}