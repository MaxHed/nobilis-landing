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
    products: {
      classicCollection: {
        name: "Collection Classique",
        shortDescription: "Notre gamme de couteaux classiques allie élégance intemporelle et performance exceptionnelle.",
        longDescription: "La Collection Classique incarne l'essence même de Nobilis Coutellerie. Chaque couteau est fabriqué avec précision, utilisant les meilleurs aciers et des manches en bois nobles. Parfaits pour un usage quotidien, ces couteaux offrent un équilibre parfait entre tradition et fonctionnalité moderne."
      },
      professionalSeries: {
        name: "Série Professionnelle",
        shortDescription: "Conçue pour les chefs exigeants, cette série offre précision et confort pour une expérience culinaire sans égal.",
        longDescription: "Notre Série Professionnelle est le choix des chefs les plus exigeants. Ces couteaux sont forgés à partir d'acier haute performance, offrant une rétention de tranchant exceptionnelle. Ergonomiques et parfaitement équilibrés, ils sont conçus pour résister aux rigueurs des cuisines professionnelles tout en offrant une précision chirurgicale."
      },
      artisanalRange: {
        name: "Gamme Artisanale",
        shortDescription: "Notre collection faite main incarne l'excellence artisanale, chaque pièce étant unique et façonnée avec passion.",
        longDescription: "La Gamme Artisanale représente le summum de notre savoir-faire. Chaque couteau est une pièce unique, façonnée à la main par nos maîtres couteliers. Utilisant des matériaux rares et précieux, ces couteaux sont de véritables œuvres d'art fonctionnelles, alliant beauté exceptionnelle et performance inégalée."
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
    products: {
      classicCollection: {
        name: "Classic Collection",
        shortDescription: "Our classic knife collection combines timeless elegance with exceptional performance.",
        longDescription: "The Classic Collection embodies the essence of Nobilis Cutlery. Each knife is meticulously crafted with the finest materials and expert craftsmanship. Perfect for everyday use, these knives offer a perfect balance between tradition and modern functionality."
      },
      professionalSeries: {
        name: "Professional Series",
        shortDescription: "Designed for the most demanding chefs, this series offers precision and comfort for an unparalleled culinary experience.",
        longDescription: "Our Professional Series is the choice of the most demanding chefs. These knives are forged from high-performance steel, offering exceptional edge retention. Ergonomic and perfectly balanced, they are designed to withstand the rigors of professional kitchens while offering surgical precision."
      },
      artisanalRange: {
        name: "Artisanal Range",
        shortDescription: "Our handcrafted collection embodies artisan excellence, with each piece being unique and crafted with passion.",
        longDescription: "The Artisanal Range represents the pinnacle of our craftsmanship. Each knife is a unique piece, handcrafted by our master craftsmen. Using rare and precious materials, these knives are true functional works of art, combining exceptional beauty and unparalleled performance."
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
