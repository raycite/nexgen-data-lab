# Airtable application setup

## 1. Create the base and table

Create a base for NextGen Data Lab and name the table `Applications`. Add these fields using the exact names below:

| Field | Airtable type | Options |
| --- | --- | --- |
| Full Name | Single line text | Use as the primary field |
| Email | Email | |
| Country | Single line text | |
| Role | Single select | Student or learner; Researcher; Mentor or professional; Organization or partner; Other |
| Interests | Multiple select | Data Science; Artificial Intelligence; Research; Software Development; Mentorship; Community Projects |
| Goals | Long text | |
| Status | Single select | Add `New` as an option |
| Submitted At | Date | Enable the time option |

## 2. Create a restricted token

In Airtable's developer hub, create a Personal Access Token with only the `data.records:write` scope. Grant it access only to the base created above.

## 3. Configure the website

Copy `.env.example` to `.env.local` and replace the placeholders:

```env
AIRTABLE_ACCESS_TOKEN=pat_your_token_here
AIRTABLE_BASE_ID=app_your_base_id_here
AIRTABLE_TABLE_NAME=Applications
```

Never commit `.env.local` or share the access token. Restart the development server after changing environment variables.

## 4. Verify

Submit a test application at `/join`, then confirm that a new record appears in the `Applications` table with a `New` status.
