import { ExperienceProps } from "@/app/experience";

export const ExperienceSection = ({
  company,
  position,
  timeline,
  description,
  responsibilities,
}: ExperienceProps) => {
  return (
    <section>
      <h4>
        {company} - {position}
      </h4>
      <h6>{timeline}</h6>
      <p>{description}</p>
      <ul>
        {responsibilities?.map((resp) => {
          const { title, text } = resp;
          return (
            <ol key={title}>
              <b>{title}</b>. {text}
            </ol>
          );
        })}
      </ul>
    </section>
  );
};
