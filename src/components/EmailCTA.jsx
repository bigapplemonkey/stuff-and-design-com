import ArrowSVG from './svgs/ArrowSVG';

const EmailCTA = ({ email, isDark = false }) => {
  const ariaLabel = `Send email to ${email}`;

  return (
    <a className="cta" href={`mailto:${email}`} aria-label={ariaLabel}>
      <div className="cta-call-type">Let’s create </div>
      <div className="cta-email">
        <div className="cta-email-type">{email}</div>
        <div className="cta-arrow">
          <ArrowSVG isDark={isDark} />
        </div>
      </div>
    </a>
  );
};

export default EmailCTA;
