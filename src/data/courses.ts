export interface Course {
  id: string;
  title: string;
  level: string;
  description: string;
  date: string;
  duration: string;
  maxParticipants: number;
  price: number;
  category: string;
  spotsLeft: number;
  longDescription?: string;
}

export const courses: Course[] = [
  {
    id: "kurs-01",
    title: "Lorem Ipsum Dolor",
    level: "Anfänger",
    category: "Drehen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "12. Jul 2025",
    duration: "3 Std.",
    maxParticipants: 6,
    price: 75,
    spotsLeft: 3,
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: "kurs-02",
    title: "Consectetur Adipiscing",
    level: "Fortgeschritten",
    category: "Glasur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "19. Jul 2025",
    duration: "4 Std.",
    maxParticipants: 8,
    price: 95,
    spotsLeft: 5,
    longDescription: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: "kurs-03",
    title: "Sed Do Eiusmod Tempor",
    level: "Alle Niveaus",
    category: "Handaufbau",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    date: "26. Jul 2025",
    duration: "3,5 Std.",
    maxParticipants: 8,
    price: 80,
    spotsLeft: 2,
  },
  {
    id: "kurs-04",
    title: "Magna Aliqua Veniam",
    level: "Alle Niveaus",
    category: "Intensiv",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2.–3. Aug 2025",
    duration: "2 × 5 Std.",
    maxParticipants: 5,
    price: 195,
    spotsLeft: 4,
  },
  {
    id: "kurs-05",
    title: "Labore Et Dolore (8–14 J.)",
    level: "Kinder",
    category: "Kinder",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    date: "9. Aug 2025",
    duration: "2 Std.",
    maxParticipants: 10,
    price: 45,
    spotsLeft: 6,
  },
  {
    id: "kurs-06",
    title: "Voluptate Velit Esse",
    level: "Fortgeschritten",
    category: "Drehen",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
    date: "16. Aug 2025",
    duration: "4 Std.",
    maxParticipants: 6,
    price: 110,
    spotsLeft: 1,
  },
];

export const categories = ["Alle", "Drehen", "Handaufbau", "Glasur", "Intensiv", "Kinder"];
