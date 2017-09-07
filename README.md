# VD ToDo app

1. ToDo app zrobiona w Vue.js
2. Do celu rekrutacyjnego projekt zrobiłem lokalnie bez Vue.cli, w innym wypadku zrobiłbym to z Vue client oraz jeśli byłby to większy projekt porozdzielał bym go na mniejsze komponenty. Dodałem co prawda jeden komponent ponieważ przy edycji todo wydawało mi się to najlepszym rozwiązaniem. Nie dodawałem więcej componentow na twardo bo spowodowałoby to małą czytelność kodu.
3. Kolorystyka projektu oczywiście może zostać szybko zmieniona ponieważ wszelkie kolory są zapisane w zminnych.
4. Dodawanie zadania do wykonania odbywa się poprzez dodanie do tablicy obiektów nowego obiektu. 
5. Todosy wyświetlane są od najstarszego do najnowszego w dół (poprzez pushowanie do tablicy). Odwrócenie kolejności jest możliwe oczywiście poprzez użycie metody unshift.
6. Usuwanie todo jest poprzez metodę splice
7. Edycja każdego todo następuje poprzez kliknięcie a następnie po edycji zapisanie następuje po wciśnięciu Enter lub przycisku.
8. Filtry są zrobione poprzez sprawdzenie posiadanej klasy. 
9. Wyszukiwarka działa poprzez filtrowanie tablicy. Metoda filtrowania została dodana w computed ponieważ computed jest zależne od właściwości.
10. Local storage został dodany w watchu ponieważ charakteryzuje się on tym iż kod jest wykonywany po tym jak dane ulegną zmianie, a o to w tym przypadku chodziło aby przy dodaniu todo lub edycji metoda handler była "odpalana" i zamieniała obiekt na JSON a następnie po tym jak instancja Vue zostanie załadowana("zamotowana") parsuje obiekt JSON zapisany do local storage.
11. Dodałem kilka animacji, pierwsza to loading page.Zrobiłem go na beforeMount ale można też zrobić oszukany loadingPage w taki sposób:



        function hideLoadingPage() {
            setTimeout(function () {
                let fullpage = document.querySelector('.fullpage-animate');
                fullpage.classList.add('hideAnimate')

                }, 1000)
            }
            hideLoadingPage();


12. Do edycji styli używałem scss oraz komilatora prepross. Jeśli jest potrzeba to mogę kod przerobić na wybraną przez Panstwa metodyke.
13. Cały projekt starałem się wykonać zgodnie z specyfikacją Vue.js






