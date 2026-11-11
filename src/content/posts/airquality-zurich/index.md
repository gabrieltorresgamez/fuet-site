---
title: "Luftqualität in Zürich: Eine visuelle Analyse"
slug: "airquality-zurich"
date: "2023-06-20T12:00:00.000Z"
updated: "2024-04-14T22:23:55.000Z"
authors: ["gabrieltorresgamez"]
tags: ["Others"]
excerpt: "Kohlenstoffmonoxid-Werte in Zürich: 3D-Spiralen, Linienplots und Luftschadstoffstreifen"
cover: "./photo-1600073191074-cef570f47b4a.jpg"
coverAlt: "Ein Kleinwagen von Teleboy parkt unter einer Eisenbahnbrücke in Zürich, eine Velofahrerin fährt vorbei."
coverCaption: "Photo by [Tommy Krombacher](https://unsplash.com/@ftm3000) / [Unsplash](https://unsplash.com/)"
lang: "de"
---

Es wird empfohlen, diesen Beitrag auf einem Laptop/Desktop im Vollbildschirmmodus zu lesen, da interaktive Grafiken verwendet werden.

In jeder Schweizer Stadt begann ein gemeinsamer Kampf gegen einen unsichtbaren Feind, der durch die Abgase der Autos hervorgebracht wurde und sich in den Herzen der Städte festsetzte, wodurch die Gesundheit der Bewohner bedroht wurde. Kohlenstoffmonoxid (CO), ein farb- und geruchloses Gas, erreichte alarmierende Werte und überschritt ständig den Grenzwert von 8 mg/m³.

In diesem Beitrag werfen wir einen genaueren Blick auf Zürich, da die Stadt einen öffentlichen Datensatz zur Luftqualität bereitstellt. Wir werden diesen Datensatz, der stündliche Messungen von 1983 bis 2022 umfasst, mit verschiedenen Visualisierungsarten analysieren.

## 3D-Spiral

Es wurde ein interaktiver 3D-Plot erstellt, der auf der Grundidee der [Klimaspirale](https://ed-hawkins.github.io/climate-visuals/spirals.html) vom brittischen Professor [Ed Hawkins](https://edhawkins.org/) basiert. In dieser Spirale können wir sehen, wie die Jahre vorüberziehen, indem sich der Datenstrahl einmal um die vertikale z-Achse dreht. Die Intensität von CO in mg/m³ wird durch die Linienabstände zur Mitte und durch Farben visualisiert.

[https://gabrieltorresgamez.github.io/CO-Zuerich/3d_co.html](https://gabrieltorresgamez.github.io/CO-Zuerich/3d_co.html)

Mit jeder Drehung des Datenstrahls wird das Ergebnis deutlicher: Seit den 1980er Jahren ist ein stetiger Rückgang der CO-Emissionen in der Stadt zu verzeichnen. Die Abstände zwischen den Linien zum Mittelpunkt werden immer kleiner, was auf niedrigere Durchschnittswerte hinweist.

Allerdings ist aus der 3D-Perspektive nicht direkt erkennbar, wo sich der genaue Mittelpunkt befindet. Daher ist es in dieser Visualisierung schwierig, die Fluktuation der Werte über die Jahreszeiten hinweg zu erkennen. Die Farbskala kann einem dabei unterstützen, diese Fluktuationen zu erkennen, jedoch lohnt es sich eine einfachere und bekanntere Art der Visualisierung zu nutzen:

## The classic lineplot

Der Linienplot ist der Klassiker unter den Visualisierungen und die beliebteste Art, Zeitreihendaten darzustellen. Er ermöglicht eine übersichtliche Darstellung des Verlaufs und macht Muster leicht erkennbar. Eine Erweiterung des Linienplots mit weiteren Elementen wie Pfeilen und Texten kann diesen Grafiken mehr Kontext verleihen.

In dieser Visualisierung werden im Vergleich zum vorherigen Plot nicht die Durchschnittswerte, sondern die Maximalwerte dargestellt, um die Überschreitung des Grenzwertes zu überwachen:

[https://gabrieltorresgamez.github.io/CO-Zuerich/line_co.html](https://gabrieltorresgamez.github.io/CO-Zuerich/line_co.html)

In der neuen Visualisierung wird deutlicher, dass die CO-Werte im Winter höher sind als im Sommer, was möglicherweise auf das Heizverhalten der Bevölkerung zurückzuführen ist. Bei der Verbrennung von fossilen Brennstoffen wie Öl, Gas oder Kohle entsteht Kohlenstoffmonoxid. Durch die Darstellung des Grenzwertes in der Visualisierung erkennen wir zudem, dass seit 1993 keine Überschreitung mehr stattgefunden hat.

Wenn eine noch einfachere Grafik in Betracht gezogen werden soll, die den Grossteil der Informationen beibehält, kann man auf eine eindimensionale Heatmap zurückgreifen:

## Air pollutant stripes

[Ed Hawkins](https://edhawkins.org/) ist auch für seine Visualisierung "[Warming Stripes](https://ed-hawkins.github.io/climate-visuals/stripes.html)" bekannt, die als Inspiration für meine folgenden Visualisierungen dient. Ähnlich wie beim vorherigen Plot wird das Datum auf der x-Achse dargestellt, jedoch werden die CO-Werte nun auf einer Farbskala von Rot-Schwarz (ungesunde Luftwerte) bis Grün (gesunde Luftwerte) dargestellt. Diese Darstellung ermöglicht eine schnelle visuelle Einschätzung der Luftqualität über die Zeit hinweg:

[https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_co.html](https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_co.html)

Bei dieser Grafik ist es jedoch schwieriger, die Saisonalität der CO-Werte zu erkennen. Zudem kann der Grenzwert nicht so klar wie beim Linienplot visualisiert werden, da die Farbskala vom Ersteller selbst definiert werden kann.

Dennoch ermöglicht diese Art von Visualisierung durch ihre Simplizität eine schnellere Vermittlung der Botschaft, dass sich die CO-Werte in den letzten Jahren deutlich verbessert haben. Darüber hinaus ermöglicht diese Darstellungsart auch leichte Vergleiche zu anderen Luftschadstoffen, wie zum Beispiel Stickstoffdioxid, was hier dargestellt werden kann:

[https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_no2_30µg_m3.html](https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_no2_30µg_m3.html)

Bei Stickstoffdioxid liegt der Grenzwert bei einem Jahresmittelwert von 30 µg/m³. Im Vergleich zum Kohlenstoffdioxid zeigt sich hier ein eher düsteres Bild. Der Grenzwert wurde fast jedes Jahr überschritten. Erst in den letzten Jahren konnten konsistent jährliche Mittelwerte von unter 30 µg/m³ erreicht werden.

Bei der Erstellung der Grafik wurde eine Schwarz-Rot-Gelb-Grün-Farbskala gewählt, um die Luftwerte im bekannten Ampelsystem zu klassifizieren. Es ist jedoch wichtig, auch eine Rot-Blau-Skala in Betracht zu ziehen, um die Unterscheidung der Werte für Personen mit Deuteranopie oder Protanopia zu verbessern. Diese könnte bei den CO-Werten wie folgt aussehen:

[https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_co_red_blue.html](https://gabrieltorresgamez.github.io/CO-Zuerich/heatmap_co_red_blue.html)

## OK, but why should I worry about the differences?

Personen ohne statistisches Wissen können Schwierigkeiten haben, die 3D-Spiralvisualisierung zu verstehen. Ihre komplexe Darstellung erfordert Erfahrung und die Fähigkeit zur Interpretation. Daher ist es oft ratsam, einfachere Visualisierungen zu verwenden, insbesondere bei Zeitreihendaten wie den CO-Werten.

Einfachere Visualisierungen wie der Linienplot oder die "Stripes" sind oft zugänglicher und leichter zu interpretieren. Sie ermöglichen auch Personen ohne spezielle Kenntnisse, Trends und Muster in den Daten zu erkennen und die Informationen besser zu verstehen.

Es ist wichtig zu beachten, dass der Linienplot eher geeignet ist, um quantitativ Informationen zu vermitteln, während die 3D-Spiralvisualisierung und die Stripes sich besser für qualitative Analysen eignen.

Bei der Wahl der Visualisierung sollte immer darauf geachtet werden, die Informationen klar und verständlich für den spezifischen Anwendungsfall zu präsentieren, um die gewünschte Zielgruppe anzusprechen und die Botschaft effektiv zu vermitteln.

## In conclusion

Die Visualisierungen haben gezeigt, dass die CO-Werte in Zürich seit den 1980er Jahren kontinuierlich gesunken sind. Dies ist ein ermutigendes Ergebnis im gemeinsamen Kampf für saubere Luft. Dennoch ist eine fortlaufende Überwachung aller Luftschadstoffe und Verbesserung der Luftqualität weiterhin von grosser Bedeutung.

## Quellenverzeichnis

Folgende Quellen wurden für Informationen zum Kohlenstoffmonoxid, Stickstoffdioxid und dessen Emissionen verwendet:

-   [Stadt Zürich. "Kohlenmonoxid"](https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie/luftqualitaet/schadstoffe/kohlenmonoxid.html)
-   [Stadt Zürich. "Stickstoffdioxid"](https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie/luftqualitaet/schadstoffe/stickstoffdioxid.html)

Die Daten für die Visualisierung wurden von opendata.swiss bezogen:

-   [opendata.swiss. "Luftqualität (3D)"](https://opendata.swiss/de/dataset/luftqualitat)

Zusätzlich konnte ich Inspiration von den Visualisierungen von Ed Hawkins und vom Republik-Artikel von Simon Schmid gewinnen:

-   [Ed Hawkins. "Blog"](https://edhawkins.org/)
-   [Simon Schmid. "Die schönste Klimagrafik der Welt"](https://www.republik.ch/2019/04/08/die-schoenste-klimagrafik-der-welt)
