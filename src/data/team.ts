/**
 * Team profile content model.
 *
 * PLACEHOLDER: the firm has not yet supplied team information. No invented
 * names, portraits, credentials or positions are published. When the firm
 * provides profiles, add one entry per person — the team page renders this
 * structure automatically, with no redesign required.
 *
 * Every field is expected to be verified by the firm:
 *   - name / position: as the firm styles them
 *   - qualifications: only verified credentials
 *   - practiceFocus: confirmed areas of work
 *   - biography: approved copy
 *   - profileLink: optional professional profile URL
 *   - photo: approved portrait, once available
 */

export interface TeamMember {
  name: string;
  position: string;
  qualifications: string;
  practiceFocus: string;
  biography: string;
  photo?: string;
  profileLink?: string;
}

/**
 * Empty until the firm supplies real profiles. The team page shows a
 * designed empty state while this array is empty.
 */
export const team: TeamMember[] = [];

export const teamHasProfiles = team.length > 0;
