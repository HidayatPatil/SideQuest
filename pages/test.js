export default function Home() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Welcome to SideQuest</h1>
            <p>Your app is working correctly!</p>
            <div style={{ marginTop: '2rem' }}>
                <a href="/onboarding" style={{ 
                    padding: '1rem 2rem', 
                    backgroundColor: '#007cba', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '8px' 
                }}>
                    Go to Onboarding
                </a>
            </div>
        </div>
    )
}