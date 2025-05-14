import NavBar from "@/components/navBar/nav-bar";
import StatusBar from "@/components/statusBar/status-bar";
import ProfileCard from "@/components/profileCard/profile-card";

export default function Profile() {
    return (
        <div className="profileCointainer">
            <StatusBar />
            <div className="profilePage">
                <h1>Welcome to your Profile</h1>
                <div className="userProfileData">
                    <ProfileCard />
                </div>
                <div className="sectionTitle">
                    <h3>STATS</h3>
                </div>
                <div className="userStats">
                    <p>
                        Bonjour! I am new to Vancouver and wanting to explore
                        the amazing nature here.
                    </p>
                    <hr className="divider" />
                    <h3>Pronouns</h3>
                    <p>She/Her</p>
                    <h3>Personality</h3>
                    <p>
                        Passionate about learning, exploring new places, and
                        meeting new people! Big nerd and a chill explorer, I’m
                        probably deep in my studies or halfway up a trail.
                    </p>
                    <h3>Cultural Background</h3>
                    <p>
                        I grew up in the countryside and am currently based in
                        Vancouver for school. As a first-generation Canadian I
                        find community greatly important.
                    </p>
                    <h3>Occupation</h3>
                    <p>Medical Student</p>
                    <h3>Languages</h3>
                    <p>beebee</p>
                    <h3>Accessibility Needs</h3>
                    <p>beebee</p>
                </div>

                <NavBar />
            </div>
        </div>
    );
}
