# Web Development – Kluczowe Technologie i Ich Zastosowanie

## 1. Różnice między frameworkiem a biblioteką na przykładzie Reacta i jQuery
Framework i biblioteka to dwa kluczowe pojęcia w świecie programowania, które często są używane wymiennie, choć mają istotne różnice. Framework to kompleksowy zestaw narzędzi i zasad, narzucający strukturę projektu i wymagający, aby kod aplikacji był tworzony zgodnie z określonymi regułami. Przykładem frameworka jest Angular. Z kolei biblioteka oferuje zestaw funkcji ułatwiających realizację określonych zadań, pozostawiając programiście większą swobodę w organizacji kodu. React, choć często mylnie nazywany frameworkiem, jest biblioteką skupiającą się na warstwie widoku aplikacji.

React umożliwia budowanie komponentów UI, zarządzanie ich stanem i aktualizację w sposób deklaratywny, co czyni go jedną z najpopularniejszych bibliotek frontendowych. W przeciwieństwie do tego Angular, będący frameworkiem, narzuca określoną strukturę aplikacji oraz oferuje kompleksowe rozwiązania obejmujące routing, zarządzanie stanem czy wstrzykiwanie zależności. Podczas gdy React zapewnia większą elastyczność w wyborze dodatkowych narzędzi, Angular dostarcza bardziej ustandaryzowane podejście, co może ułatwić pracę nad większymi projektami. Framework wymaga jednak większego zaangażowania w naukę, podczas gdy biblioteka, jak React, pozwala na bardziej swobodne podejście do tworzenia aplikacji.

## 2. SPA a MPA – Wady i Zalety
Aplikacje internetowe można podzielić na Single Page Applications (SPA) i Multi Page Applications (MPA). SPA ładują całą aplikację podczas pierwszego żądania i dynamicznie aktualizują treść bez konieczności przeładowania strony. Frameworki takie jak React czy Vue.js są często wykorzystywane do budowy SPA.

### Zalety SPA:
- Szybkie i płynne działanie dzięki ograniczonej liczbie żądań HTTP.
- Większe możliwości interaktywne i responsywne UI.
- Możliwość wykorzystania Progressive Web Apps (PWA).

### Wady SPA:
- Problemy z SEO (Search Engine Optimization) ze względu na renderowanie po stronie klienta.
- Większe obciążenie początkowego ładowania strony.

MPA generują oddzielne strony dla każdego żądania. Takie podejście stosuje się w tradycyjnych systemach, jak sklepy internetowe oparte na PHP czy Java.

### Zalety MPA:
- Lepsze wsparcie dla SEO.
- Optymalna obsługa stron o dużej ilości danych.

### Wady MPA:
- Większa liczba żądań HTTP powoduje wolniejsze przełączanie stron.
- Zwiększona złożoność zarządzania stanem aplikacji.

## 3. Node.js, NPM, NPX i Yarn
Node.js to środowisko uruchomieniowe JavaScript, które umożliwia tworzenie aplikacji backendowych. W przeciwieństwie do tradycyjnego JavaScriptu, Node.js działa poza przeglądarką, opierając się na silniku V8.

### NPM (Node Package Manager)
To menedżer pakietów dostarczany z Node.js, pozwalający instalować, zarządzać i aktualizować zewnętrzne biblioteki.

### NPX (Node Package Executor)
Jest narzędziem do jednorazowego uruchamiania pakietów, eliminującym konieczność ich instalacji na stałe.

### Yarn
Alternatywa dla NPM, opracowana przez Facebooka, oferuje większą szybkość instalacji pakietów i deterministyczne zarządzanie zależnościami dzięki plikowi `yarn.lock`. Yarn jest często uznawany za bardziej wydajny w projektach o dużej skali, choć zarówno NPM, jak i Yarn mają zbliżone możliwości.

## 4. Node_modules – Do Czego Służy i Czym Jest
Folder `node_modules` zawiera wszystkie pakiety zainstalowane za pomocą NPM lub Yarn. Jest kluczowym elementem projektu opartego na Node.js, umożliwiającym integrację kodu z bibliotekami zewnętrznymi.

Każdy pakiet w folderze ma swoje własne zależności, tworząc potencjalnie głęboką strukturę katalogów. Rozmiar `node_modules` może być znaczny, co często bywa krytykowane. Niemniej jednak folder ten jest nieodzowny do uruchamiania aplikacji i nie powinien być usuwany bez odpowiedniej znajomości projektu.

## 5. React – Historia, Wady, Zalety i Core Concepts
React został stworzony przez Jordana Walke w 2011 roku w Facebooku, aby uprościć tworzenie interfejsów użytkownika. W 2013 roku projekt został udostępniony jako open source.

### Zalety Reacta:
- Deklaratywność, umożliwiająca intuicyjne tworzenie interfejsów.
- Szybkość renderowania dzięki wirtualnemu DOM.
- Szerokie wsparcie społeczności i bogaty ekosystem.

### Wady Reacta:
- Brak wbudowanego routera czy zarządzania stanem.
- Wyższy próg wejścia w porównaniu do tradycyjnych bibliotek, takich jak jQuery.

### Core Concepts Reacta:
- **JSX**: Rozszerzenie JavaScriptu pozwalające na wstawianie kodu HTML w JS. 
- **Components**: Podstawowe elementy aplikacji, pozwalające na modularność i reużywalność kodu. 
- **Props**: Mechanizm przekazywania danych między komponentami.
- **State**: Lokalny stan komponentu, umożliwiający śledzenie zmian w aplikacji.
- **Lifecycle Methods**: Metody cyklu życia komponentu, takie jak `componentDidMount` czy `componentWillUnmount`, pozwalające zarządzać zachowaniem komponentów.
- **Hooks**: Mechanizm umożliwiający korzystanie z funkcjonalności Reacta, takich jak stan czy efekty uboczne, w komponentach funkcyjnych.
- **Context API**: Narzędzie do zarządzania globalnym stanem aplikacji bez potrzeby używania dodatkowych bibliotek.
- **Virtual DOM**: Technologia przyspieszająca renderowanie poprzez minimalizowanie operacji na rzeczywistym DOM.
- **Event Handling**: Obsługa zdarzeń w sposób deklaratywny i spójny z Reactem. **JSX**: Rozszerzenie JavaScriptu pozwalające na wstawianie kodu HTML w JS.
- **Eventy**: Obsługa zdarzeń w sposób deklaratywny.
- **Hooks**: Mechanizm pozwalający korzystać ze stanu i cyklu życia w komponentach funkcyjnych.
- **Components**: Podstawowy element aplikacji, umożliwiający reużywalność i modularność kodu.

## 6. Porównanie Reacta, Angulara i Vue.js
| Cecha                | React                  | Angular                 | Vue.js                  |
|----------------------|------------------------|-------------------------|-------------------------|
| **Próg wejścia**    | Średni                 | Wysoki                  | Niski                   |
| **Popularność**     | Największa (Meta)       | Duża (Google)          | Średnia                |
| **Zalety**           | Elastyczność, ekosystem | Kompleksowość, wsparcie| Prostota, intuicyjność  |
| **Wady**             | Wymaga dodatkowych narzędzi | Stroma krzywa nauki    | Mniejszy ekosystem      |
| **Organizacja**      | Meta (Facebook)        | Google                  | Społeczność open-source|
| **Rozmiar**          | Lekki                  | Ciężki                 | Lekki                   |

React dominuje na rynku frontendu, oferując dużą swobodę, podczas gdy Angular to pełnoprawny framework, a Vue.js łączy cechy obu, skupiając się na prostocie.

