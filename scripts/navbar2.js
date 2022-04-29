showNavbar();


let pre = 20;
function controlDropdown(i){
    let btns = document.getElementsByClassName("dropdown-btn");
    let dropDowns = document.getElementsByClassName("dropdown-content");
    let dashLines = document.getElementsByClassName("dash-line");
    if(pre==20)
    pre = i;
    else if(pre==i)
    pre = 20;
    else if(pre!=i){
        btns[pre].children[0].classList.toggle("fa-chevron-up");
        dropDowns[pre].classList.toggle("show");
        if(pre!=3)
        dashLines[pre].classList.toggle("show");
        pre = i;
    }
    btns[i].children[0].classList.toggle("fa-chevron-up");
    dropDowns[i].classList.toggle("show");
    if(i!=3)
    dashLines[i].classList.toggle("show");
}

function closeDropdown(i){
    pre = 20;
    let btns = document.getElementsByClassName("dropdown-btn");
    let dropDowns = document.getElementsByClassName("dropdown-content");
    let dashLines = document.getElementsByClassName("dash-line");
    btns[i].children[0].classList.toggle("fa-chevron-up");
    dropDowns[i].classList.toggle("show");
    if(i!=3)
    dashLines[i].classList.toggle("show");
}


function showNavbar(){
    let div = document.createElement("div");
    div.innerHTML = `<nav class="navbar">
    <a href="index.html" class="nav-ps-logo"><img src="https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png" alt=""></a>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow" onclick="controlDropdown(0)">Platform<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-platform">
            <div class="nav-closebtn" onclick="closeDropdown(0)"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-platform-container">
                <div class="nav-platform-upskill">
                    <div class="nav-content-title uppercase">ways to upskill</div>
                    <ul class="text-white column-flex">
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/dashboard.png">
                            </span>
                            <span>Courses</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/iq.png">
                            </span>
                            <span>Skill assessments</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/cloud.png">
                            </span>
                            <span>Labs</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/hand.png">
                            </span>
                            <span>Hands-on learning</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/certifications.png">
                            </span>
                            <span>Certification prep</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/live-classes-icon.svg">
                            </span>
                                <span>Live classes</span>
                        </li>
                        <li>
                            <span class="upskill-logo">
                                <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/analytics.png">
                            </span>
                            <span>Team</span> efficiency
                        </li>
                    </ul>
                </div>
                <div class="nav-platform-2 text-white">
                    <div class="border-bottom">
                        <div class="nav-platform-skills">
                            <div class="nav-content-title uppercase">skills for</div>
                            <ul class="column-flex">
                                <li>Software Development</li>
                                <li>IT ops</li>
                                <li>Info & cyber security</li>
                                <li>Cloud computing</li>
                                <li>Machine learning/AI</li>
                                <li>Data professional</li>
                            </ul>
                        </div>
                        <div class="nav-platform-paths">
                            <div class="nav-content-title uppercase">top trending paths</div>
                            <ul>
                                <li>
                                    <div class="path-box">
                                        <img src="https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=75" alt="">
                                        <p><span class="font-10">Microsoft Azure Development</span><br> 4 <span class="text-light">Courses</span> 7 <span class="text-light">Hours</span><span class="q">  Q</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="path-box">
                                        <img src="https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png?w=75" alt="">
                                        <p><span class="font-10">AWS Operations</span><br> 7 <span class="text-light">Courses</span> 14 <span class="text-light">Hours</span><span class="q">  Q</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="path-box">
                                        <img src="https://pluralsight2.imgix.net/paths/images/r-programming-eb2e267a97.png?w=75" alt="">
                                        <p><span class="font-10">Cleaning Data with R</span><br> 5 <span class="text-light">Courses</span> 8 <span class="text-light">Hours</span><span class="q">  Q</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="path-box">
                                        <img src="https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png?w=75" alt="">
                                        <p><span class="font-10">Core Python</span><br> 23 <span class="text-light">Courses</span> 41 <span class="text-light">Hours</span><span class="q">  Q</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="path-box">
                                        <img src="https://pluralsight2.imgix.net/paths/images/ruby-7e88ddd5f0.png?w=75" alt="">
                                        <p><span class="font-10">Ruby Language Fundamentals</span><br> 7 <span class="text-light">Courses</span> 13 <span class="text-light">Hours</span><span class="q">  Q</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nav-platform-22">
                        <p>See our entire course library</p>
                        <p>Check out the Technology Index</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow"  onclick="controlDropdown(1)">Products<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-product">
            <div class="nav-closebtn" onclick="closeDropdown(1)"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-product-container">
                <div class="text-white nav-content-skills">
                    <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="SKILLS">
                    <a href="" class="nav-product-link">Build tech skills to drive results</a>
                    <ul class="nav-link-list">
                        <li>
                            <a href="">What is Skills?</a>
                        </li>
                        <li>
                            <a href="../pages/pricing.html">View Plans</a>
                        </li>
                    </ul>
                </div>
                <div class="text-white nav-content-flow">
                    <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" alt="FLOW">
                    <a href="" class="nav-product-link">Get insights into your workflow</a>
                    <ul class="nav-link-list">
                        <li>
                            <a href="">What is Flow?</a>
                        </li>
                        <li>
                            <a href="../pages/pricing.html">View Plans</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow"  onclick="controlDropdown(2)">Resources<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-resource">
            <div class="nav-closebtn" onclick="closeDropdown(2)"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-resource-container">
                <div class="nav-resource-primary text-white">
                    <div class="nav-resource-learn">
                        <div class="nav-content-title">LEARN</div>
                        <ul class="nav-link-list">
                            <li><a href="">Blog</a></li>
                            <li><a href="">Customer Stories</a></li>
                            <li><a href="">Resource center</a></li>
                            <li><a href="">Guides</a></li>
                            <li><a href="">App download</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                    <div class="nav-resource-connect">
                        <div class="nav-content-title">CONNECT</div>
                        <ul class="nav-link-list">
                            <li><a href="">Events</a></li>
                            <li><a href="">Webinars</a></li>
                            <li><a href="">Podcast</a></li>
                        </ul>
                    </div>
                </div>
                <div class="nav-resource-secondary">
                    <div>
                        <h1>The ultimate playbook on Technology Skill Development</h1>
                        <p>IMPLEMENT THE STRATEGY FOR BUILDING BETTER<span class="text-highlight">TEAMS</span></p>
                        <button class="btn btn-gradient btn-gradient-learnmore">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="" class="flex-grow-1 nav-link">For Individuals</a>
    <div class="dropdown">
        <button class="dropdown-btn"  onclick="controlDropdown(3)"><i class="fas fa-search"></i></button>
        <div class="dash-line"></div>
        <div class="dropdown-content nav-searchbox">
            <div class="nav-closebtn search-close" onclick="closeDropdown(3)"><i class="fas fa-times"></i></div>
            <div class="nav-search-container">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="What do you want to learn?">
            </div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow"  onclick="controlDropdown(4)">Sign in<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-signin">
            <div class="nav-closebtn" onclick="closeDropdown(4)"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-signin-container">
                <div class="text-white nav-content-skills">
                    <div onclick="window.location.href='../pages/signin.html'">
                        <p class="nav-content-title">SIGN IN WITH</p>
                        <div class="nav-signin-logo">
                            <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="SKILLS">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="text-white nav-content-flow">
                    <div onclick="window.location.href='../pages/signin.html'">
                        <p class="nav-content-title">SIGN IN WITH</p>
                        <div class="nav-signin-logo">
                            <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" alt="FLOW">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="../pages/pricing.html"><button class="btn btn-white-border">TRY FOR FREE</button></a>
</nav>`;

    document.querySelector("body").append(div);
}