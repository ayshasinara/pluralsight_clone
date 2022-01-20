showNavbar();
controlDropDown();
function controlDropDown(){
    let btns = document.getElementsByClassName("dropdown-btn");
    let dropDowns = document.getElementsByClassName("dropdown-content");
    let dashLines = document.getElementsByClassName("dash-line");
    let closeBtns = document.getElementsByClassName("nav-closebtn");
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener("click", function(){
            btns[i].children[0].classList.toggle("fa-chevron-up");
            dropDowns[i].classList.toggle("show");
            if(i!=3)
            dashLines[i].classList.toggle("show");
        });
        closeBtns[i].addEventListener("click", function(){
            btns[i].children[0].classList.toggle("fa-chevron-up");
            dropDowns[i].classList.toggle("show");
            if(i!=3)
            dashLines[i].classList.toggle("show");
        });
    }
}

function showNavbar(){
    let div = document.createElement("div");
    div.innerHTML = `<nav class="navbar">
    <a href="index.html" class="nav-ps-logo"><img src="https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png" alt=""></a>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow">Platform<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-platform">
            <div class="nav-closebtn"><i class="fas fa-times"></i></div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow">Products<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-product">
            <div class="nav-closebtn"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-product-container">
                <div class="text-white nav-product-skills">
                    <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="SKILLS">
                    <a href="" class="nav-product-link">Build tech skills to drive results</a>
                    <ul class="nav-link-list">
                        <li>
                            <a href="">What is Skills?</a>
                        </li>
                        <li>
                            <a href="">View Plans</a>
                        </li>
                    </ul>
                </div>
                <div class="text-white nav-product-flow">
                    <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" alt="FLOW">
                    <a href="" class="nav-product-link">Get insights into your workflow</a>
                    <ul class="nav-link-list">
                        <li>
                            <a href="">What is Flow?</a>
                        </li>
                        <li>
                            <a href="">View Plans</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow">Resources<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-resource">
            <div class="nav-closebtn"><i class="fas fa-times"></i></div>
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
        <button class="dropdown-btn"><i class="fas fa-search"></i></button>
        <div class="dash-line"></div>
        <div class="dropdown-content">
            <div class="nav-closebtn"><i class="fas fa-times"></i></div>
            
        </div>
    </div>
    <div class="dropdown">
        <button class="dropdown-btn nav-arrow">Sign in<i class="fas fa-chevron-down"></i></button>
        <hr class="dash-line">
        <div class="dropdown-content nav-signin">
            <div class="nav-closebtn"><i class="fas fa-times"></i></div>
            <div class="dropdown-container nav-signin-container">
                <div class="text-white nav-content-skills">
                    <div>
                        <p class="nav-content-title">SIGN IN WITH</p>
                        <div class="nav-signin-logo">
                            <img class="nav-product-logo" src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="SKILLS">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="text-white nav-content-flow">
                    <div>
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
    <a href="plans.html"><button class="btn btn-white-border">TRY FOR FREE</button></a>
</nav>`;

    document.querySelector("body").append(div);
}