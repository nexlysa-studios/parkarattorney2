/**
 * Team profiles supplied by the firm.
 */
export interface TeamMember {
  name: string;
  position: string;
  phone: string;
  email: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Nazeer Parkar",
    position: "Attorney and Director",
    phone: "083 299 8735",
    email: "nazeer@parklaw.co.za",
  },
  {
    name: "Hayley Botha",
    position: "Office Manager and Deceased Estates Administrator",
    phone: "067 809 6833",
    email: "hayley@parklaw.co.za",
  },
  {
    name: "Towfeeq Williams",
    position: "Candidate Attorney",
    phone: "063 658 5672",
    email: "towfeeq@parklaw.co.za",
  },
  {
    name: "Fatima Albertyn",
    position: "Candidate Attorney",
    phone: "064 909 5070",
    email: "fatimaa@parklaw.co.za",
  },
  {
    name: "Stephan November",
    position: "Paralegal",
    phone: "079 619 8399",
    email: "stephan@parklaw.co.za",
  },
  {
    name: "Annelise Theron",
    position: "Reception and Accounts",
    phone: "021 879 6631",
    email: "annelise@parklaw.co.za",
  },
];

export const teamHasProfiles = team.length > 0;
