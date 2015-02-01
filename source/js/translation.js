
/**
 * Defines constants for application
 */
define(['angular', 'ngTranslate'], function (angular) {
    'use strict';
    return angular.module('app.translation', ['pascalprecht.translate'])
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.translations('en', {
                SEARCH: 'Search',
                SEARCH_B: 'Rechercher',
                SEARCH_PH: 'Movie, Serie, Actor ...',
                MENU_MOVIES: 'Movies',
                MENU_SERIES: 'Series',
                MOVIE: 'Movie',
                SERIE: 'Serie',
                ACTOR: 'Actor',
                SERIES: 'Series',
                VIDEO: 'Video',
                VIDEOS: 'Videos',
                PERSON: 'Person',
                PERSONS: 'Persons',
                MORE: 'more',
                LOGIN_TITLE: 'Login',
                USERNAME: 'Username',
                PASSWORD: 'Password',
                LOGIN: 'Login',
                EMAIL: 'Email',
                LOGOUT: 'Logout',
                USER_PROFILE: 'Profile',
                USER_CONFIG: 'Options',
                RECENTLY_ADDED: 'Recently Added',
                FILTER_TYPE: 'Type',
                FILTER_GENRE: 'Genre',
                FILTER_YEAR: 'Year',
                FILTER_RATING: 'Rating',
                FILTER_LIBRARY: 'Library',
                FILTER_VIEWED: 'Viewed',
                PLAYER_DROP_HERE: 'Drop here',
                PLAYER_CLEAR_LIST: 'Clear list',
                STOP_KILL_ENCODING: 'Stop and kill encoding',
                PERSON_DETAILS: 'Details',
                PERSON_SUMMARY: 'Biography',
                PERSON_VIDEOS: 'Movies',
                VIDEO_DETAILS: 'Details',
                VIDEO_PLAY: 'Play',
                VIDEO_DOWNLOAD: 'Downaload',
                VIDEO_GENRES: 'Genres:',
                VIDEO_SUMMARY: 'Summary',
                VIDEO_ACTORS: 'Actors',
                writer: 'Writer',
                director: 'Director',
                actor: 'actor',
                ADMIN_MENU_FILES: 'Folders and Files',
                ADMIN_MENU_MODULES: 'Modules',
                ADMIN_MENU_TUNNELS: 'Tunnels',
                ADMIN_MENU_USERS: 'Users',
                ADMIN_MENU_SETTINGS: 'Settings',
                ADMIN_MENU_TASKS: 'Tasks',
                ADMIN_MENU_MAINTENANCE: 'Maintenance',
                ADMIN_MENU_LIBRARY: 'Library',
                ADMIN_FILES_TITLE: 'Folders and Files',
                ADMIN_FILES_FOLDERS: 'Media Folders',
                ADMIN_FILES_ADD_FOLDER: 'add a folder',
                ADMIN_FILES_SAVE: 'Save',
                ADMIN_FILES_SCAN: 'Search Medias',
                ADMIN_MAINTENANCE_TITLE: 'Maintenance',
                ADMIN_MAINTENANCE_NAME: 'Name',
                ADMIN_MAINTENANCE_FILTER_no_child_group_list: 'Empty Groups',
                ADMIN_MAINTENANCE_FILTER_no_child_season_list: 'Empty Seasons',
                ADMIN_MAINTENANCE_FILTER_orphan_season_list: 'Orphan Seasons',
                ADMIN_MAINTENANCE_FILTER_orphan_video_list: 'Orphan Episodes',
                ADMIN_MAINTENANCE_FILTER_non_added_video_list: 'Non Added Videos',
                ADMIN_MODULE_TITLE: 'Modules',
                ADMIN_MODULE_NAME: 'Name',
                ADMIN_MODULE_VERSION: 'Version',
                ADMIN_MODULE_INSTALLED: 'Installed',
                ADMIN_MODULE_ENABLED: 'Enabled',
                ADMIN_MODULE_true: 'yes',
                ADMIN_MODULE_false: 'no',
                ADMIN_MODULE_ACTION: 'Action',
                ADMIN_MODULE_ACTION_INSTALL: 'Install',
                ADMIN_MODULE_ACTION_ENABLE: 'Enable',
                ADMIN_SETTING_TITLE: 'Setting',
                ADMIN_SETTING_GROUP: 'Group',
                ADMIN_SETTING_KEY: 'Key',
                ADMIN_SETTING_VALUE: 'Value',
                ADMIN_SETTING_ACTION: 'Action',
                ADMIN_SETTING_EDIT: 'Edit',
                ADMIN_SETTING_EDIT_SAVE: 'Save',
                ADMIN_SETTING_EDIT_CANCEL: 'Cancel',
                ADMIN_TUNNEL_TITLE: 'Tunnel',
                ADMIN_TUNNEL_KEY: 'Key',
                ADMIN_TUNNEL_SERVICE: 'Service',
                ADMIN_TUNNEL_ENABLED: 'Enabled',
                ADMIN_TUNNEL_ACTION: 'Action',
                ADMIN_TUNNEL_ACTION_ENABLE: 'Enable',
                ADMIN_TUNNEL_ACTION_DISABLE: 'Disable',
                ADMIN_TUNNEL_true: 'yes',
                ADMIN_TUNNEL_false: 'no',
                ADMIN_TASKS_TITLE: 'Tasks',
                ADMIN_TASKS_GROUP: 'Group',
                ADMIN_TASKS_KEY: 'Key',
                ADMIN_TASKS_PROGRESS: 'Progress',
                ADMIN_TASKS_REFRESH: 'Refresh',
                ADMIN_TASKS_CLEAR: 'Cancel and Clear',
                ADMIN_TASKS_RUNNING: 'Running',
                ADMIN_USER_TITLE: 'Users',
                ADMIN_USER_USERNAME: 'Username',
                ADMIN_USER_EMAIL: 'Email',
                ADMIN_USER_ACTION_DELETE: 'Delete',
                ADMIN_USER_CREATE: 'New User',
                ADMIN_LIBRARY_TITLE: 'Library',
                ADMIN_ACTIONS: 'Actions',
                ADMIN_LOGS: 'Logs',
                VIDEO_NO_FILE: 'This video has no file associated',
                PLAYER_NOT_READABLE_TITLE: 'Can\'t play',
                PLAYER_NOT_READABLE: 'This item cannot be rendered (missing file)',
                RESET: 'reset',
                YES: 'Yes',
                NO: 'No',
                SCAN: 'Scan',
                PREV: '<<',
                NEXT: '>>',
                RESCAN_ITEM: 'Reload data',
                PLAYER_RESUME_TITLE: 'Resume playback ?'
            });
            $translateProvider.translations('fr', {
                SEARCH: 'Recherche',
                SEARCH_B: 'Rechercher',
                SEARCH_PH: 'Film, Serie, Acteur ...',
                MENU_MOVIES: 'Films',
                MENU_SERIES: 'Series',
                MOVIE: 'Film',
                SERIE: 'Serie',
                ACTOR: 'Acteur',
                SERIES: 'Series',
                VIDEO: 'Vidéo',
                VIDEOS: 'Vidéos',
                PERSON: 'Personne',
                PERSONS: 'Personnes',
                MORE: 'plus',
                EMAIL: 'Email',
                LOGIN_TITLE: 'Identification',
                USERNAME: 'Identifiant',
                PASSWORD: 'Mot de passe',
                LOGIN: 'Entrer',
                LOGOUT: 'Déconnexion',
                USER_PROFILE: 'Profil',
                USER_CONFIG: 'Préférences',
                RECENTLY_ADDED: 'Ajouté Récement',
                FILTER_TYPE: 'Type',
                FILTER_GENRE: 'Genre',
                FILTER_YEAR: 'Année',
                FILTER_RATING: 'Note',
                FILTER_LIBRARY: 'Librairie',
                FILTER_VIEWED: 'Vue',
                PLAYER_DROP_HERE: 'Déposer ici',
                PLAYER_CLEAR_LIST: 'Vider la liste',
                STOP_KILL_ENCODING: 'Arrêter la lecture et l\'encodage',
                PERSON_DETAILS: 'Détails',
                PERSON_SUMMARY: 'Biographie',
                PERSON_VIDEOS: 'Films',
                VIDEO_DETAILS: 'Détails',
                VIDEO_PLAY: 'Lire',
                VIDEO_DOWNLOAD: 'Télécharger',
                VIDEO_GENRES: 'Genres:',
                VIDEO_SUMMARY: 'Résumé',
                VIDEO_ACTORS: 'Acteurs',
                writer: 'Auteur',
                director: 'Metteur en scène',
                actor: 'acteur',
                ADMIN_MENU_FILES: 'Dossiers',
                ADMIN_MENU_MODULES: 'Modules',
                ADMIN_MENU_TUNNELS: 'Tunnels',
                ADMIN_MENU_USERS: 'Utilisateurs',
                ADMIN_MENU_SETTINGS: 'Paramètres',
                ADMIN_MENU_TASKS: 'Taches',
                ADMIN_MENU_MAINTENANCE: 'Maintenance',
                ADMIN_MENU_LIBRARY: 'Librairie',
                ADMIN_FILES_TITLE: 'Dossiers et Fichiers',
                ADMIN_FILES_FOLDERS: 'Dossiers contenant les médias',
                ADMIN_FILES_ADD_FOLDER: 'ajouter un dossier',
                ADMIN_FILES_SAVE: 'Enregister',
                ADMIN_FILES_SCAN: 'Rechercher des médias',
                ADMIN_MAINTENANCE_TITLE: 'Maintenance',
                ADMIN_MAINTENANCE_NAME: 'Nom',
                ADMIN_MAINTENANCE_FILTER_no_child_group_list: 'Groupes vides',
                ADMIN_MAINTENANCE_FILTER_no_child_season_list: 'Saisons vides',
                ADMIN_MAINTENANCE_FILTER_orphan_season_list: 'Saisons orphelines',
                ADMIN_MAINTENANCE_FILTER_orphan_video_list: 'Episodes orphelins',
                ADMIN_MAINTENANCE_FILTER_non_added_video_list: 'Vidéos non ajoutées',
                ADMIN_MODULE_TITLE: 'Modules',
                ADMIN_MODULE_NAME: 'Nom',
                ADMIN_MODULE_VERSION: 'Version',
                ADMIN_MODULE_INSTALLED: 'Installé',
                ADMIN_MODULE_ENABLED: 'Activé',
                ADMIN_MODULE_true: 'oui',
                ADMIN_MODULE_false: 'non',
                ADMIN_MODULE_ACTION: 'Action',
                ADMIN_MODULE_ACTION_INSTALL: 'Installer',
                ADMIN_MODULE_ACTION_ENABLE: 'Activer',
                ADMIN_SETTING_TITLE: 'Paramètres',
                ADMIN_SETTING_EDIT_TITLE: 'Modifier',
                ADMIN_SETTING_GROUP: 'Groupe',
                ADMIN_SETTING_KEY: 'Clé',
                ADMIN_SETTING_VALUE: 'Valeur',
                ADMIN_SETTING_ACTION: 'Action',
                ADMIN_SETTING_EDIT: 'Modifer',
                ADMIN_SETTING_EDIT_SAVE: 'Enregistrer',
                ADMIN_SETTING_EDIT_CANCEL: 'Annuler',
                ADMIN_TUNNEL_TITLE: 'Tunnel',
                ADMIN_TUNNEL_KEY: 'Clé',
                ADMIN_TUNNEL_SERVICE: 'Service',
                ADMIN_TUNNEL_ENABLED: 'Activé',
                ADMIN_TUNNEL_ACTION: 'Action',
                ADMIN_TUNNEL_ACTION_ENABLE: 'Activer',
                ADMIN_TUNNEL_ACTION_DISABLE: 'Désactiver',
                ADMIN_TUNNEL_true: 'oui',
                ADMIN_TUNNEL_false: 'non',
                ADMIN_TASKS_TITLE: 'Tasks',
                ADMIN_TASKS_GROUP: 'Groupe',
                ADMIN_TASKS_KEY: 'Nom',
                ADMIN_TASKS_PROGRESS: 'Etat',
                ADMIN_TASKS_REFRESH: 'Actualiser',
                ADMIN_TASKS_CLEAR: 'Annuler / Supprimer tout',
                ADMIN_TASKS_RUNNING: 'En cours',
                ADMIN_USER_TITLE: 'Utilisateurs',
                ADMIN_USER_USERNAME: 'Pseudonyme',
                ADMIN_USER_EMAIL: 'Email',
                ADMIN_USER_ACTION_DELETE: 'Supprimer',
                ADMIN_USER_CREATE: 'Nouvel Utilisateur',
                ADMIN_LIBRARY_TITLE: 'Librairie',
                ADMIN_ACTIONS: 'Actions',
                ADMIN_LOGS: 'Logs',
                VIDEO_NO_FILE: 'Cette video n\'a pas de fichier associé',
                PLAYER_NOT_READABLE_TITLE: 'Lecture impossible',
                PLAYER_NOT_READABLE: 'Cet objet ne peut être lu (fichier manquant)',
                RESET: 'reset',
                YES: 'Oui',
                NO: 'Non',
                SCAN: 'Scan',
                PREV: '<<',
                NEXT: '>>',
                RESCAN_ITEM: 'Recharger les infos',
                PLAYER_RESUME_TITLE: 'Reprendre la lecture ?'
            });
        $translateProvider.preferredLanguage('fr');
    }]);
});