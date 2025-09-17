// Simple interactive script for marketing site
document.addEventListener("DOMContentLoaded", (): void => {
  // Smooth scrolling for navigation links
  const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav a[href^="#"]')

  navLinks.forEach((link: HTMLAnchorElement): void => {
    link.addEventListener("click", (e: Event): void => {
      e.preventDefault()
      const targetId: string = link.getAttribute("href")!.substring(1)
      const targetElement: HTMLElement | null = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add some animation to feature cards on scroll
  const observerOptions: IntersectionObserverInit = {
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  }

  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).style.opacity = "1"
        ;(entry.target as HTMLElement).style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Initially hide feature cards
  const featureCards: NodeListOf<Element> = document.querySelectorAll(".feature-card")
  featureCards.forEach((card: Element): void => {
    const htmlCard = card as HTMLElement
    htmlCard.style.opacity = "0"
    htmlCard.style.transform = "translateY(20px)"
    htmlCard.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })

  // Marketing site loaded successfully
})
