document.addEventListener("DOMContentLoaded", () => {
    // Elementos principales
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const footerYear = document.querySelector("footer p:last-child");

    // 1. Actualizar el año automáticamente
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()}`;
    }

    // 2. Crear el botón del menú móvil
    if (navbar && menu) {
        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.type = "button";
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-controls", "main-menu");
        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        menu.id = "main-menu";
        navbar.insertBefore(menuButton, menu);

        menuButton.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );
        });

        // Cerrar el menú al seleccionar una sección
        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
                menuButton.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Abrir menú");
            });
        });
    }

    // 3. Efecto en el navbar al desplazarse
    const updateNavbar = () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 30);
        }
    };

    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();

    // 4. Animaciones de aparición al entrar en pantalla
    const animatedElements = document.querySelectorAll(
        ".section, .intro-line, .hero-content, " +
        ".hero-visual, .learning-item, .timeline-item, " +
        ".stat, .contact-section"
    );

    animatedElements.forEach((element) => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach((element) => {
            element.classList.add("visible");
        });
    }

    // 5. Barra de progreso de lectura
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    progressBar.setAttribute("aria-hidden", "true");
    document.body.appendChild(progressBar);

    let ticking = false;

    const updateProgress = () => {
        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;

        progressBar.style.width = `${progress}%`;
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });

    updateProgress();

    // 6. Botón para volver arriba
    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Volver al inicio");
    backToTop.hidden = true;
    document.body.appendChild(backToTop);

    const updateBackToTop = () => {
        backToTop.hidden = window.scrollY < 400;
    };

    window.addEventListener("scroll", updateBackToTop, {
        passive: true
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateBackToTop();

    // 7. Resaltar el enlace de la sección visible
    const sections = document.querySelectorAll(
        "main section[id]"
    );
    const navLinks = document.querySelectorAll(".menu a");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    navLinks.forEach((link) => {
                        const isCurrent =
                            link.getAttribute("href") ===
                            `#${entry.target.id}`;

                        if (isCurrent) {
                            link.setAttribute("aria-current", "location");
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px"
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    // 8. Movimiento sutil en las tarjetas al pasar el cursor
    const cards = document.querySelectorAll(
        ".profile-card, .learning-item, .stat"
    );

    const supportsHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    if (supportsHover) {
        cards.forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });
    }

    // 9. Respetar la preferencia de movimiento reducido
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("reduce-motion");
    }
});