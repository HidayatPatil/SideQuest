
import NavBar from "@/components/navBar/navBar";
import StatusBar from "@/components/statusBar/status-bar";
import ProfileCard from "@/components/profileCard/profileCard";
import Button from "@/components/button/button";

export default function Profile() {
    return (
        <div className="profileCointainer">
            <div className="profilePage">
                <h1>My Profile</h1>
                <div className="userProfileData">
                    <ProfileCard />
                </div>
                <div className="statsContainer">
                    <div className="sectionTitle">
                        <h3>STATS</h3>
                    </div>
                    <div className="profileStats">
                        <div className="profileStatsContainer">
                            <div className="profileStatsSection bio">
                                Bonjour! I am new to Vancouver and wanting to
                                explore the amazing nature here.
                            </div>
                            <hr className="profileDivider" />
                            <div className="profileStatsSection">
                                <h4>Pronouns</h4>
                                <div className="profileTag">She/Her</div>
                            </div>
                            <div className="profileStatsSection">
                                <h4>Personality</h4>
                                <div>
                                    Passionate about learning, exploring new
                                    places, and meeting new people! Big nerd and
                                    a chill explorer, I’m probably deep in my
                                    studies or halfway up a trail.
                                </div>
                            </div>
                            <div className="profileStatsSection">
                                <h4>Cultural Background</h4>
                                <div>
                                    I grew up in the countryside and am
                                    currently based in Vancouver for school. As
                                    a first-generation Canadian I find community
                                    greatly important.
                                </div>
                            </div>
                            <div className="profileStatsSection">
                                <h4>Occupation</h4>
                                <div>Medical Student</div>
                            </div>
                            <div className="profileStatsSection">
                                <h4>Languages</h4>
                                <div className="profileTags">
                                    <div className="profileTag">English</div>
                                    <div className="profileTag">French</div>
                                </div>
                            </div>
                            <div className="profileStatsSection">
                                <h4>Accessibility Needs</h4>
                                <div className="profileTag">
                                    Hearing Impaired
                                </div>
                                
                            </div>
                            <Button
                                    text="Edit Profile"
                                    variant="primaryOutline"
                                    onClick={() => alert("Edit!")}
                                    style={{ width: "100%" }}
                                />
                        </div>
                    </div>
                </div>

                <NavBar />
            </div>
        </div>
    );
}
