-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 18 Décembre 2019 à 14:57
-- Version du serveur :  5.7.28-0ubuntu0.18.04.4
-- Version de PHP :  7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `title`, `picture`, `description`) VALUES
(2, 'Vin Rouge', '', NULL),
(3, 'Vin Blanc', '', NULL),
(4, 'Vin rosé', '', NULL),
(5, 'Prestiges', '', NULL),
(6, 'Promotions', '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comments` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `credit_card`
--

CREATE TABLE `credit_card` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` int(11) NOT NULL,
  `datecard` datetime NOT NULL,
  `crypt` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `kart`
--

CREATE TABLE `kart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `products` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20191216145007', '2019-12-16 14:50:42'),
('20191216154333', '2019-12-16 15:43:57'),
('20191216160215', '2019-12-16 16:02:23'),
('20191216161315', '2019-12-16 16:13:19'),
('20191216161525', '2019-12-16 16:15:29');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `score` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `reduction` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `products`
--

INSERT INTO `products` (`id`, `categorie_id`, `title`, `picture`, `description`, `score`, `price`, `reduction`) VALUES
(4, 2, 'Bon rouge', 'https://www.vinatis.com/35545-fine_default/ailes-de-paloumey-2015-second-vin-du-chateau-paloumey.png', 'Bon rouge', 5, 20, NULL),
(5, 2, 'Bon blanc', 'https://www.vinatis.com/39163-fine_default/chateau-la-branne-2015-cru-bourgeois.png', 'Bon rouge', 5, 20, NULL),
(6, 2, 'Bon rose', 'https://www.vinatis.com/36941-fine_default/chateau-cheret-pitres-2016.png', 'Bon rouge', 5, 20, NULL),
(7, 2, 'Bon rouge', 'https://www.vinatis.com/44243-fine_default/cotes-du-rhone-2016-e-guigal.png', 'Bon rouge', 5, 20, NULL),
(8, 2, 'Bon blanc', 'https://www.vinatis.com/36886-fine_default/crozes-hermitage-grand-classique-2017-cave-de-tain.png', 'Bon rouge', 5, 20, NULL),
(9, 2, 'Bon rose', 'https://www.vinatis.com/40616-fine_default/chateau-le-marin-2017.png', 'Bon rouge', 5, 20, NULL),
(10, 3, 'Bon rouge', 'https://www.vinatis.com/44145-fine_default/le-seuil-de-mazeyres-2016-second-vin-du-chateau-mazeyres.png', 'Bon rouge', 5, 20, NULL),
(11, 5, 'Bon blanc', 'https://www.vinatis.com/41190-fine_default/angel-de-larrainzar-2017-pago-de-larrainzar.png', 'Bon rouge', 5, 20, NULL),
(12, 3, 'Bon rose', 'https://www.vinatis.com/41070-fine_default/rasteau-2016-romain-duvernay.png', 'Bon rouge', 5, 20, NULL),
(13, 5, 'Bon rouge', 'https://www.vinatis.com/44800-fine_default/maranges-1er-cru-la-fuissiere-2017-domaine-bertrand-bachelet.png', 'Bon rouge', 5, 20, NULL),
(14, 3, 'Bon blanc', 'https://www.vinatis.com/40672-fine_default/cote-rotie-2017-domaine-francois-et-fils.png', 'Bon rouge', 5, 20, NULL),
(15, 3, 'Bon rose', 'https://www.vinatis.com/38400-fine_default/cotes-du-rhone-village-roaix-les-coudoulieres-2016-rhonea.png', 'Bon rouge', 5, 20, NULL),
(16, 4, 'Bon rouge', 'https://www.vinatis.com/36660-fine_default/les-darons-2017-by-jeff-carrel.png', 'Bon rouge', 5, 20, NULL),
(17, 2, 'Bon blanc', 'https://www.vinatis.com/42220-fine_default/estate-blue-edition-2016-dona-paula.png', 'Bon rouge', 5, 20, NULL),
(18, 5, 'Bon rose', 'https://www.vinatis.com/41186-fine_default/reserva-palacio-del-burgo-2014-bodegas-burgo-viejo.png', 'Bon rouge', 5, 20, NULL),
(19, 3, 'Bon rouge', 'https://www.vinatis.com/34857-fine_default/tete-de-belier-2016-chateau-puech-haut.png', 'Bon rouge', 5, 20, NULL),
(20, 3, 'Bon blanc', 'https://www.vinatis.com/43557-fine_default/cotes-du-rhone-air-baloon-2016-xavier-vignon.png', 'Bon rouge', 5, 20, NULL),
(21, 4, 'Bon rose', 'https://www.vinatis.com/30249-fine_default/campo-arriba-old-vines-2014-bodega-senorio-de-barahonda.png', 'Bon rouge', 5, 20, NULL),
(22, 4, 'Bon rouge', 'https://www.vinatis.com/43756-fine_default/beaumes-de-venise-2016-romain-duvernay.png', 'Bon rouge', 5, 20, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anniversary` date NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal` int(11) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5F9E962AA76ED395` (`user_id`),
  ADD KEY `IDX_5F9E962A4584665A` (`product_id`);

--
-- Index pour la table `credit_card`
--
ALTER TABLE `credit_card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_11D627EE67B3B43D` (`users_id`);

--
-- Index pour la table `kart`
--
ALTER TABLE `kart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_CE17A058A76ED395` (`user_id`);

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B3BA5A5ABCF5E72D` (`categorie_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `credit_card`
--
ALTER TABLE `credit_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `kart`
--
ALTER TABLE `kart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_5F9E962A4584665A` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_5F9E962AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `credit_card`
--
ALTER TABLE `credit_card`
  ADD CONSTRAINT `FK_11D627EE67B3B43D` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `kart`
--
ALTER TABLE `kart`
  ADD CONSTRAINT `FK_CE17A058A76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_B3BA5A5ABCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
