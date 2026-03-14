"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles, Award, Star, CheckCircle, Zap, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav" className="fixed top-0 left-0 right-0 z-50">
        <NavbarLayoutFloatingInline
          brandName="Čištění vozidel Praha"
          navItems={[
            { name: "Služby", id: "services" },
            { name: "Výhody", id: "benefits" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "📞 Zavolat", href: "tel:+420721611123" }}
          animateOnLoad={true}
          className="shadow-lg"
          navItemClassName="font-medium tracking-wide"
          buttonClassName="px-6 py-3 rounded-full font-semibold transition-all"
          buttonTextClassName="font-bold"
        />
      </div>

      <div id="hero" data-section="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
        <HeroSplitDualMedia
          title="Péče o vůz na úrovni, kterou běžné myčky neznají"
          description="Nepoužíváme kompromisy. Pouze špičkové produkty, promyšlené postupy a maximální pečlivost. Vaše auto zaslouží prémiovou péči."
          background={{ variant: "plain" }}
          tag="Luxusní detailing v Praze"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "📞 Zavolat a objednat", href: "tel:+420721611123" },
            { text: "📍 Zobrazit služby", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773429212013-stw5owws.jpg", imageAlt: "Luxusní detail vozidla po čištění" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773429212014-bkkjpym2.jpg", imageAlt: "Profesionální péče o vozidlo" }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="Objednávky pouze telefonicky – osobní přístup ke každému vozu"
          className="min-h-screen pb-0"
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 pb-0"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl leading-relaxed"
          tagClassName="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          buttonContainerClassName="flex flex-col sm:flex-row gap-4"
          buttonClassName="px-8 py-4 rounded-full font-semibold transition-all"
          mediaWrapperClassName="grid grid-cols-2 gap-4"
        />
      </div>

      <div id="pricing-services" data-section="pricing-services" className="relative py-4 lg:py-8">
        <PricingCardTwo
          title="Naše služby"
          description="Tři úrovně péče o vaše vozidlo – od základního čištění až po komplexní renovaci a ochranu."
          tag="Balíčky péče"
          tagIcon={Award}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "standard",              badge: "STANDARD",              price: "od 3 690 Kč",              subtitle: "Kompletní péče pro čistý a voňavý vůz",              buttons: [{ text: "Objednat", href: "tel:+420721611123" }],
              features: [
                "Předmytí aktivní pěnou",                "Odstranění silných nečistot",                "Čištění disků a podběhů",                "Ruční mytí karoserie",                "Vysušení karoserie",                "Ošetření pneumatik",                "Vyluxování interiéru",                "Čištění plastů a palubní desky",                "Čištění oken",                "Čištění koberců",                "Provonění interiéru",                "⏱️ Trvání: 2 hodiny"
              ]
            },
            {
              id: "premium",              badge: "PREMIUM",              badgeIcon: Star,
              price: "od 4 390 Kč",              subtitle: "Hloubkové čištění s ochranou laku i interiéru",              buttons: [{ text: "Objednat", href: "tel:+420721611123" }],
              features: [
                "Vše ze STANDARD +",                "Detailnější čištění všech částí",                "Impregnace pneumatik (týdny výdrže)",                "Leštění detailerem s voskem/keramikou",                "Impregnace plastů interiéru",                "Tepování sedadel",                "Čištění a impregnace kůže",                "Hloubková péče o barvu",                "Profesionální ochrana",                "Předcházení znečištění",                "Zvýšená odolnost",                "⏱️ Trvání: 4 hodiny"
              ]
            },
            {
              id: "vip",              badge: "VIP",              badgeIcon: Sparkles,
              price: "od 9 990 Kč",              subtitle: "Renovace a ochrana vozu na úrovni showroomu",              buttons: [{ text: "Objednat", href: "tel:+420721611123" }],
              features: [
                "Vše z PREMIUM +",                "Strojní leštění laku",                "Dekontaminace poletavé koroze",                "Roční keramická ochrana laku",                "Tekuté stěrače",                "Impregnace podběhů",                "Dezinfekce klimatizace",                "Showroom kvalita",                "Dlouhodobá ochrana",                "Maximální lesk a hydrofóbní efekt",                "Premium péče na nejvyšší úrovni",                "⏱️ Trvání: 24 hodin"
              ]
            }
          ]}
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          textBoxDescriptionClassName="text-lg md:text-xl text-gray-700 mb-12"
          badgeClassName="text-sm font-bold uppercase tracking-wider"
          priceClassName="text-3xl md:text-4xl font-bold my-4"
          subtitleClassName="text-lg font-medium mb-6"
          planButtonClassName="w-full py-3 px-6 rounded-full font-semibold transition-all"
          featuresClassName="space-y-3 text-sm"
        />
      </div>

      <div id="features-detail" data-section="features-detail" className="relative py-20 lg:py-32">
        <FeatureCardTen
          title="Co dělá naši službu speciální"
          description="Nezáleží nám jen na mytí. Jde nám o transformaci a dlouhodobou ochranu vašeho vozidla."
          tag="Detail a preciznost"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "feature-products",              title: "Pouze špičkové produkty",              description: "Pracujeme s nejlepšími autokosmetickými produkty na trhu. Bez levných a škodlivých náhrad.",              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773429212014-0wii2j35.jpg", imageAlt: "Premium produkty pro péči o vozidla" },
              items: [
                { icon: Award, text: "Certifikované značky" },
                { icon: Sparkles, text: "Profesionální formule" }
              ],
              reverse: true
            }
          ]}
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          textBoxDescriptionClassName="text-lg md:text-xl text-gray-700 mb-12"
          featureTitleClassName="text-2xl md:text-3xl font-bold mb-3"
        />
      </div>

      <div id="products-addons" data-section="products-addons" className="relative py-20 lg:py-32">
        <ProductCardFour
          title="Doplňkové služby"
          description="Rozšiřte péči o váš vůz našimi speciálními doplňkovými službami."
          tag="Speciální nabídka"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "addon-ceramic",              name: "Keramická ochrana Gyeon",              price: "6 999 Kč",              variant: "5 let ochrany",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7yrw4y",              imageAlt: "Keramická ochrana vozidla"
            },
            {
              id: "addon-roof",              name: "Čištění plátěné střechy",              price: "1 290 Kč",              variant: "Speciální péče",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8kpnt2",              imageAlt: "Čištění convertible střechy"
            },
            {
              id: "addon-pet-hair",              name: "Odstranění zvířecích chlupů",              price: "790 Kč",              variant: "Hloubkové čištění",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=znafm6",              imageAlt: "Odstranění zvířecích chlupů z auta"
            },
            {
              id: "addon-dirty",              name: "Extrémně znečištěný vůz",              price: "Individuální",              variant: "Ceník dle stavu",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8y53yr",              imageAlt: "Obnova extrémně znečištěného vozu"
            },
            {
              id: "addon-polish",              name: "Rozleštění lokálních vad laku",              price: "Individuální",              variant: "Dle potřeby",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s4bhaw&_wi=2",              imageAlt: "Leštění a opravy laku"
            },
            {
              id: "addon-leather",              name: "Tepování sedaček nebo čištění kůže",              price: "2 490 Kč",              variant: "Luxusní péče",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1pcbai",              imageAlt: "Péče o kožené sedačky"
            }
          ]}
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24"
          textBoxTitleClassName="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          textBoxDescriptionClassName="text-lg md:text-xl text-gray-700 mb-12"
          cardClassName="p-6 rounded-xl border hover:shadow-lg transition-all"
          cardNameClassName="text-lg font-bold mt-4"
          cardPriceClassName="text-2xl font-bold text-primary mt-2"
        />
      </div>

      <div id="benefits-metric" data-section="benefits-metric" className="relative py-20 lg:py-32">
        <MetricCardFourteen
          title="Výhody naší péče"
          tag="Proč nás zvolit"
          tagAnimation="slide-up"
          metrics={[
            { id: "precision", value: "100%", description: "Precizní ruční čištění" },
            { id: "products", value: "Premium", description: "Špičková autokosmetika" },
            { id: "detail", value: "Max.", description: "Detailní práce" },
            { id: "approach", value: "Osobní", description: "Přístup ke každému vozu" },
            { id: "pickup", value: "Zdarma", description: "Vyzvednutí v Praze" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24"
          titleClassName="text-4xl md:text-5xl font-bold tracking-tight mb-12"
          metricsContainerClassName="grid grid-cols-2 md:grid-cols-5 gap-6"
          metricClassName="text-center p-6 rounded-lg"
          valueClassName="text-3xl md:text-4xl font-bold mb-2"
          descriptionClassName="text-sm md:text-base"
        />
      </div>

      <div id="contact" data-section="contact" className="relative py-20 lg:py-32">
        <ContactSplitForm
          title="Zarezervujte si čištění vozidla"
          description="Objednávky přijímáme telefonicky. Náš tým vám poskytne detailní informace a najde pro vás ideální řešení."
          inputs={[
            { name: "name", type: "text", placeholder: "Vaše jméno", required: true },
            { name: "phone", type: "tel", placeholder: "+420 XXX XXX XXX", required: true },
            { name: "carModel", type: "text", placeholder: "Model vozidla", required: true },
            { name: "email", type: "email", placeholder: "Vaše email", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Popište stav vašeho vozu a služby, které vás zajímají", rows: 5, required: false }}
          useInvertedBackground={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiJU1e2jhOFKhLWY9tVwfVdNYC/uploaded-1773429212014-y62k1q4q.jpg"
          imageAlt="Umístění servisu v Praze"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Poslat poptávku"
          onSubmit={(data) => {
            const phoneNumber = '420774465891';
            const message = `Jméno: ${data.name}\nTelefon: ${data.phone}\nModel vozidla: ${data.carModel}\nEmail: ${data.email || 'Není uvedeno'}\nZpráva: ${data.message || 'Není uvedena'}`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
          }}
          containerClassName="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24"
          titleClassName="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          descriptionClassName="text-lg md:text-xl text-gray-700 mb-8"
          buttonClassName="px-8 py-4 rounded-full font-semibold transition-all w-full"
          formCardClassName="p-8 rounded-xl shadow-lg"
        />
      </div>

      <div id="footer" data-section="footer" className="relative bg-gray-900 text-white">
        <FooterSimple
          columns={[
            {
              title: "Služby",              items: [
                { label: "STANDARD balíček", href: "#services" },
                { label: "PREMIUM balíček", href: "#services" },
                { label: "VIP balíček", href: "#services" },
                { label: "Doplňkové služby", href: "#addons" }
              ]
            },
            {
              title: "Kontakt",              items: [
                { label: "Telefonicky", href: "tel:+420721611123" },
                { label: "Nad Vinným Potokem 1149", href: "https://maps.google.com/?q=Nad+Vinným+Potokem+1149,+Praha+10" },
                { label: "Praha 10 – Vršovice", href: "#" },
                { label: "IČO: 19570872", href: "#" }
              ]
            },
            {
              title: "Informace",              items: [
                { label: "O nás", href: "#" },
                { label: "Naše procesy", href: "#services" },
                { label: "Výhody", href: "#benefits" },
                { label: "Pojmenované reference", href: "#contact" }
              ]
            },
            {
              title: "Právní",              items: [
                { label: "Podmínky používání", href: "#" },
                { label: "Ochrana osobních údajů", href: "#" },
                { label: "Cookies", href: "#" },
                { label: "Záruky a refundace", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Čištění vozidel Praha. Všechna práva vyhrazena."
          bottomRightText="Vytvořeno s péčí a přesností | Web design zaměřený na konverze"
          containerClassName="bg-gray-900 text-white py-12 lg:py-16 max-w-full"
          columnsClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 max-w-7xl mx-auto px-4 lg:px-8"
          columnTitleClassName="font-bold text-lg mb-4"
          columnItemClassName="text-sm hover:opacity-80 transition-opacity"
          bottomLeftTextClassName="text-xs text-gray-400"
          bottomRightTextClassName="text-xs text-gray-400"
        />
      </div>
    </ThemeProvider>
  );
}