import { ref, computed } from 'vue'

const currentLanguage = ref('fr')

const translations = {
  fr: {
    about: 'À propos',
    productsMenu: 'Produits',
    contact: 'Contact',
    heroTitle: "L'Art de la Coutellerie de Luxe",
    heroButton: 'Découvrir nos créations',
    aboutTitle: 'Notre Passion',
    aboutText: 'Chez Nobilis Coutellerie, nous créons des couteaux artisanaux d\'exception, alliant tradition et innovation. Chaque pièce est un chef-d\'œuvre unique, façonné avec des matériaux nobles et un savoir-faire inégalé.',
    productsTitle: 'Nos Collections',
    discoverButton: 'Découvrir',
    contactTitle: 'Contactez-nous',
    contactText: 'Vous avez des questions ou vous souhaitez passer une commande ? N\'hésitez pas à nous contacter.',
    contactButton: 'Envoyer un email',
    footerText: 'Tous droits réservés.',
    closeButton: 'Fermer',
    home: 'Accueil',
    productsTitle: "Nos Collections",
    discoverButton: "Découvrir",
    disclaimerText: "Ce site représente une entreprise fictive dans le cadre d'un exercice de business plan pour un master UX/UI.",
    createdBy: "Créé par",
    products: {
      classicCollection: {
        name: "Essentiel",
        shortDescription: "Des couteaux pliants personnalisables ou pré-conçus, alliant simplicité et élégance pour un usage quotidien.",
        longDescription: "La gamme Essentiel de Nobilis Coutellerie propose des couteaux pliants que vous pouvez personnaliser en sélectionnant les éléments souhaités, ou commander en version pré-conçue pour plus de rapidité. Ces couteaux sont pensés pour offrir une esthétique sobre, mais avec une qualité de fabrication impeccable. Les matériaux utilisés garantissent une longévité exceptionnelle, tout en assurant une prise en main agréable. Que vous choisissiez de personnaliser votre couteau ou d'opter pour un modèle prêt à l'emploi, la gamme Essentiel est idéale pour un usage quotidien sans compromis sur le style et la fonctionnalité."
      },
      professionalSeries: {
        name: "Signature",
        shortDescription: "Des couteaux en édition limitée, gravés avec des œuvres d’artistes renommés, utilisant des matériaux rares et précieux.",
        longDescription: "La gamme Signature de Nobilis Coutellerie est dédiée aux collectionneurs et aux amateurs de couteaux d’exception. Chaque modèle de cette gamme est fabriqué en édition limitée et numérotée, avec des gravures d’œuvres réalisées par des artistes reconnus. Utilisant des matériaux rares, tels que l’acier damassé et des bois précieux, chaque couteau est une véritable œuvre d’art, conçue pour ceux qui apprécient l’exclusivité et le savoir-faire artisanal. Ces couteaux sont des pièces uniques, pensées pour durer et devenir des objets de collection prisés."
      },      
      artisanalRange: {
        name: "Héritage",
        shortDescription: "Créez un couteau unique avec des matériaux rares, des gravures ou un guillochage personnalisé, pour une pièce qui vous ressemble.",
        longDescription: " L'offre Héritage de Nobilis Coutellerie vous permet de concevoir un couteau entièrement personnalisé, allant au-delà des options disponibles dans l’offre classique. Vous pouvez choisir des matériaux spécifiques non proposés sur le site, ajouter des gravures, du guillochage ou toute autre finition détaillée. Ce service sur mesure s’adresse à ceux qui souhaitent créer une pièce vraiment unique, en collaborant avec nos artisans pour réaliser un couteau qui reflète leur goût personnel et leur créativité. Chaque couteau Héritage est conçu pour être transmis de génération en génération, un véritable héritage familial."
      }
    }
  },
  en: {
    about: 'About',
    productsMenu: 'Products',
    contact: 'Contact',
    heroTitle: 'The Art of Luxury Cutlery',
    heroButton: 'Discover our creations',
    aboutTitle: 'Our Passion',
    aboutText: 'At Nobilis Cutlery, we create exceptional handcrafted knives, combining tradition and innovation. Each piece is a unique masterpiece, crafted with noble materials and unparalleled expertise.',
    productsTitle: 'Our Collections',
    discoverButton: 'Discover',
    contactTitle: 'Contact Us',
    contactText: 'Do you have questions or would you like to place an order? Don\'t hesitate to contact us.',
    contactButton: 'Send an email',
    footerText: 'All rights reserved.',
    closeButton: 'Close',
    home: 'Home',
    disclaimerText: "This site represents a fictitious company for a UX/UI master's exercise.",
    createdBy: "Created by",
    products: {
      classicCollection: {
        name: "Essentiel",
        shortDescription: "Customizable or pre-designed folding knives, combining simplicity and elegance for everyday use.",
        longDescription: "The Essentiel collection from Nobilis Coutellerie offers folding knives that can be customized by selecting specific components, or pre-designed for quick and easy ordering. These knives are designed to offer a simple yet refined aesthetic with impeccable craftsmanship. The materials used ensure exceptional durability while providing a comfortable grip. Whether you choose to personalize your knife or opt for a ready-made model, the Essentiel range is perfect for everyday use without compromising on style and functionality."
      },
      professionalSeries: {
        name: "Signature",
        shortDescription: "Limited edition knives engraved with artwork from renowned artists, crafted with rare and precious materials.",
        longDescription: "The Signature range from Nobilis Coutellerie is dedicated to collectors and enthusiasts of exceptional knives. Each knife in this collection is produced in a limited and numbered edition, featuring engravings of works created by renowned artists. Using rare materials like damascus steel and exotic woods, each knife is a true masterpiece designed for those who value exclusivity and craftsmanship. These knives are unique pieces meant to last and become treasured collector’s items."
      },
      artisanalRange: {
        name: "Artisanal Range",
        shortDescription: "Create a unique knife with rare materials, custom engravings, or intricate guillochage, for a piece that truly reflects your identity.",
        longDescription: "The Héritage offer from Nobilis Coutellerie allows you to design a fully personalized knife, beyond the options available in the classic range. You can select specific materials not featured on the site, add custom engravings, guillochage, or other detailed finishes. This bespoke service is for those who wish to create a truly unique piece, working closely with our artisans to craft a knife that reflects their personal taste and creativity. Each Héritage knife is designed to be passed down through generations, becoming a true family heirloom."
      }
    }
  }
}

export function useTranslation() {
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    for (const k of keys) {
      if (value && value.hasOwnProperty(k)) {
        value = value[k]
      } else {
        return key // Retourne la clé si la traduction n'est pas trouvée
      }
    }
    return value
  }

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'fr' ? 'en' : 'fr'
  }

  return {
    t,
    currentLanguage,
    toggleLanguage
  }
}
