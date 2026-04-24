import { Sparkles, Heart, Info, Lightbulb } from 'lucide-react';

interface ELI5TabProps {
  scenario: string;
  onboardingData: Record<string, string>;
}

export function ELI5Tab({ scenario, onboardingData }: ELI5TabProps) {
  const generateSimpleLawExplanation = () => {
    const lowerScenario = scenario.toLowerCase();
    
    let explanation = {
      whatIsThisAreaOfLaw: '',
      howDoesTheLawWork: '',
      whatAreTheRules: [] as string[],
      howDoCourtsDecide: '',
      whatCanHappen: ''
    };

    // Tenancy
    if (lowerScenario.includes('tenant') || lowerScenario.includes('landlord') || lowerScenario.includes('rent')) {
      explanation.whatIsThisAreaOfLaw = 'This is about **housing law** in England & Wales. When someone rents a home, special rules protect both the person renting (tenant) and the person who owns the home (landlord).';
      
      explanation.howDoesTheLawWork = 'In this country, there are written rules called **laws** that say landlords must keep homes safe and in good condition. The most important rule is in something called the "Landlord and Tenant Act 1985" - it says landlords must fix things like broken heating, leaking roofs, and broken pipes. Tenants have a right to live peacefully without the landlord bothering them all the time - this is called "quiet enjoyment".';
      
      explanation.whatAreTheRules = [
        'Landlords must fix important things in the home (like heating, water, and the building itself)',
        'Landlords must give proper written notice before asking tenants to leave',
        'Landlords cannot just kick tenants out without going to court first',
        'Tenants must pay rent on time and look after the property',
        'If something breaks, tenants need to tell the landlord so they can fix it'
      ];
      
      explanation.howDoCourtsDecide = 'When judges in England & Wales decide housing cases, they ask questions like: "Did the landlord know about the problem?" and "Did the landlord fix it quickly enough?" They look at the rules in the law and check if everyone followed them. Sometimes they also look at old cases (called **precedents**) where other judges decided similar problems - this helps them be fair and consistent.';
      
      explanation.whatCanHappen = 'If landlords don\'t follow the rules, tenants can complain to the council (who can inspect the home), or go to a special court called a **tribunal**. The tribunal can order the landlord to fix things or pay the tenant money as compensation. If landlords try to evict tenants without proper notice, courts can stop them and the landlord might get in serious trouble.';
    }
    // Insurance
    else if (lowerScenario.includes('insurance') || lowerScenario.includes('claim')) {
      explanation.whatIsThisAreaOfLaw = 'This is about **insurance law** in England & Wales. Insurance is when you pay money regularly to a company who promises to help you if something bad happens (like a car crash or house fire).';
      
      explanation.howDoesTheLawWork = 'In this country, insurance companies must follow special rules called the **Insurance Act 2015** and the **Consumer Insurance Act 2012**. These laws say insurance companies must be honest and fair. When you make a claim (ask for help), they must look at it quickly and fairly. They can\'t just say "no" without a good reason, and they must explain their decisions clearly.';
      
      explanation.whatAreTheRules = [
        'Insurance companies must answer your claim within a reasonable time',
        'They must treat you fairly and honestly',
        'If they say "no" to your claim, they must explain why using your insurance policy',
        'You must tell the truth when you buy insurance',
        'If the insurance company is unfair, you can complain to the Financial Ombudsman (a free helper)'
      ];
      
      explanation.howDoCourtsDecide = 'Judges in England & Wales read your insurance policy very carefully. If the words are unclear or confusing, they often decide in favour of the customer, not the insurance company. They ask: "Did the problem you\'re claiming for actually happen?" and "Does your insurance policy cover this type of problem?" They also check if the insurance company followed all the rules about handling claims fairly.';
      
      explanation.whatCanHappen = 'If an insurance company breaks the rules, you can complain to the **Financial Ombudsman Service** (it\'s free). They\'re like a referee who looks at both sides and decides what\'s fair. If they agree with you, they can order the insurance company to pay your claim or give you compensation. In serious cases, the insurance company might get into trouble with the regulator (the people who make sure insurance companies behave properly).';
    }
    // Contract
    else if (lowerScenario.includes('contract') || lowerScenario.includes('agreement')) {
      explanation.whatIsThisAreaOfLaw = 'This is about **contract law** in England & Wales. A contract is when two people or businesses make promises to each other - like "I\'ll pay you £100 if you fix my fence."';
      
      explanation.howDoesTheLawWork = 'In this country, when you make a promise in a contract, the law says you must keep it. Contracts can be written down or just spoken (though written is easier to prove). If someone breaks their promise, the law calls this a **breach of contract**. The person who got hurt by the broken promise can ask for money to make up for their loss - but only if they also tried to reduce the problem themselves.';
      
      explanation.whatAreTheRules = [
        'Both people must agree to the same thing (you can\'t force someone into a contract)',
        'Both people must give something (money, work, goods - called "consideration")',
        'If you break your promise, you might have to pay the other person for their losses',
        'You can only ask for money for losses that were predictable when you made the promise',
        'If someone breaks a really important promise, you can cancel the whole contract'
      ];
      
      explanation.howDoCourtsDecide = 'Courts in England & Wales read the contract carefully to understand what was promised. They try to work out what both people meant when they agreed. There\'s a famous old case from 1854 called **Hadley v Baxendale** that says you can only get money back for losses that both people would have expected when they made the deal. Judges also check if you tried to reduce your losses (called **mitigation**) - you can\'t just sit back and let the problem get worse.';
      
      explanation.whatCanHappen = 'If someone breaks a contract, you can: (1) ask them to do what they promised; (2) ask for money to cover your losses; or (3) if it\'s really serious, cancel the contract and walk away. Before going to court, people usually send a warning letter saying "you broke your promise, please fix it." Many problems get sorted out by talking or using a mediator (a neutral helper) without going to court at all.';
    }
    // Consumer
    else if (lowerScenario.includes('consumer') || lowerScenario.includes('product') || lowerScenario.includes('refund')) {
      explanation.whatIsThisAreaOfLaw = 'This is about **consumer rights law** in England & Wales. This area of law protects people who buy things from shops or online. It makes sure shops sell products that work properly.';
      
      explanation.howDoesTheLawWork = 'In this country, there\'s a law called the **Consumer Rights Act 2015** that gives you automatic rights when you buy something. Shops MUST sell things that: (1) work properly and are good quality, (2) do what the shop said they would do, and (3) match the description. These are your rights - shops can\'t take them away with small print or signs saying "no refunds."';
      
      explanation.whatAreTheRules = [
        'Anything you buy must be good quality and work properly',
        'If something breaks quickly or doesn\'t work, it\'s the shop\'s fault (not the manufacturer\'s)',
        'Within 30 days, you can return faulty things for a full refund',
        'After 30 days, the shop must repair or replace faulty items',
        'If something breaks within 6 months, the law assumes it was faulty when you bought it (the shop must prove otherwise)'
      ];
      
      explanation.howDoCourtsDecide = 'Judges in England & Wales use the Consumer Rights Act 2015 rules to decide if something was faulty. They ask: "Would an ordinary person think this product is good enough for what it costs?" A cheap product doesn\'t have to be perfect, but an expensive one should be better quality. Courts are strict with shops - they can\'t use complicated rules to avoid the law. Your rights as a customer are protected and shops must follow them.';
      
      explanation.whatCanHappen = 'If a shop won\'t give you a refund, repair, or replacement when they should, you can: (1) complain formally to the shop, (2) contact Citizens Advice (free help), (3) use an Alternative Dispute Resolution service (often free), or (4) take the shop to small claims court. In small claims court, you don\'t need a lawyer and it\'s quite informal - the judge helps you explain your problem. Trading Standards (the government helpers) can also investigate shops that break the rules.';
    }
    // Motor vehicle
    else if (lowerScenario.includes('accident') || lowerScenario.includes('vehicle') || lowerScenario.includes('car')) {
      explanation.whatIsThisAreaOfLaw = 'This is about **negligence law** and **road traffic law** in England & Wales. These laws say that when you drive a car, you must be careful not to hurt other people or damage their property.';
      
      explanation.howDoesTheLawWork = 'In this country, drivers have a **duty of care** - this means you must drive carefully and think about other people on the road. This rule comes from a very old case from 1932 called **Donoghue v Stevenson** which said people must be careful not to harm their "neighbours" (people affected by their actions). If a driver isn\'t careful and causes damage, they might have to pay to fix it.';
      
      explanation.whatAreTheRules = [
        'All drivers must drive as carefully as a "reasonable person" would drive',
        'If you have an accident, you must swap names, addresses, and insurance details with the other driver',
        'You must tell your insurance company about accidents quickly (usually within a week)',
        'The person who caused the accident (or their insurance) should pay for the damage',
        'If you partly caused the accident too, you might get less money (called "contributory negligence")'
      ];
      
      explanation.howDoCourtsDecide = 'Judges in England & Wales ask: "Did this driver make a mistake that a careful driver wouldn\'t make?" They look at things like: Did they break the Highway Code rules? Were they speeding? Did they look where they were going? Courts use photographs, witness statements, and sometimes dashcam videos to work out what happened. If both drivers made mistakes, the judge splits the blame (maybe 50/50 or 70/30) and shares the costs fairly.';
      
      explanation.whatCanHappen = 'Usually, insurance companies sort out accident claims by talking to each other. But if they can\'t agree, you can: (1) send a letter to the other driver and their insurer asking them to pay, (2) wait for them to respond, and (3) if they still won\'t pay, take them to small claims court. In small claims court for car damage, it\'s quite simple - you show your photos, repair bills, and evidence of how the accident happened. The judge decides who should pay.';
    }
    // General
    else {
      explanation.whatIsThisAreaOfLaw = 'This is about **civil law** in England & Wales. Civil law covers disagreements between people or businesses about money, property, contracts, or rights. It\'s different from criminal law (which is about crimes like theft or violence).';
      
      explanation.howDoesTheLawWork = 'In this country, when people can\'t solve a problem by talking, they can ask a court or tribunal to help. Courts follow rules called **precedents** - decisions made by judges in previous similar cases. This means if a judge decided something 50 years ago, judges today will often make the same decision if the facts are similar. This makes the law fair and predictable.';
      
      explanation.whatAreTheRules = [
        'If you want to take someone to court, you must first try to solve the problem by talking',
        'The person making the complaint (claimant) must prove their case is probably true (more than 50% likely)',
        'You must have evidence to back up what you\'re saying (documents, photos, witnesses)',
        'Courts prefer people to use mediation (a neutral helper) instead of a full trial',
        'Different courts handle different types of problems based on how much money is involved'
      ];
      
      explanation.howDoCourtsDecide = 'Judges in England & Wales follow the **Civil Procedure Rules** - these are like an instruction book for how to run cases fairly. They try to make decisions that are "just and proportionate" (fair and not too expensive for the problem). They listen to both sides, look at the evidence, and apply the law to decide who is right. The person bringing the case must prove it\'s "more likely than not" that their version is true (called **balance of probabilities**).';
      
      explanation.whatCanHappen = 'Before going to court, you should send a letter explaining the problem and asking the other person to fix it. Give them time to respond (usually 2-4 weeks). If that doesn\'t work, you can issue a court claim. For smaller problems (under £10,000), there\'s a "small claims court" where you don\'t need a lawyer and it\'s quite informal. For bigger problems, the process is more formal with strict rules. Many cases settle (get agreed) before trial because going to trial is expensive and risky for both sides.';
    }

    return explanation;
  };

  const explanation = generateSimpleLawExplanation();

  return (
    <div>
      {/* Jurisdiction Notice */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(7, 60, 101, 0.06)',
          padding: '1rem',
          border: '1px solid rgba(7, 60, 101, 0.12)',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}
      >
        <Info 
          style={{ 
            width: '18px', 
            height: '18px', 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#073C65'
          }} 
        />
        <p 
          style={{ 
            fontSize: '0.8125rem', 
            color: '#073C65', 
            lineHeight: '1.6',
            fontWeight: 500
          }}
        >
          This explains how the law works in <strong>England & Wales only</strong>. Different rules apply in Scotland, Northern Ireland, and other countries.
        </p>
      </div>

      {/* What Is This Area of Law */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles style={{ width: '18px', height: '18px' }} className="text-gold" />
          What Is This Area of Law?
        </h3>
        <div 
          className="rounded-xl"
          style={{ 
            background: 'rgba(212, 158, 55, 0.06)',
            padding: '1.25rem',
            border: '1px solid rgba(212, 158, 55, 0.15)',
            marginLeft: '1.75rem'
          }}
        >
          <p 
            className="text-grey-dark"
            style={{ 
              fontSize: '0.9375rem',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{ __html: explanation.whatIsThisAreaOfLaw }}
          />
        </div>
      </div>

      {/* How Does the Law Work */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Info style={{ width: '18px', height: '18px' }} className="text-gold" />
          How Does the Law Work?
        </h3>
        <p 
          className="text-grey-dark"
          style={{ 
            fontSize: '0.9375rem',
            lineHeight: '1.8',
            paddingLeft: '1.75rem'
          }}
          dangerouslySetInnerHTML={{ __html: explanation.howDoesTheLawWork }}
        />
      </div>

      {/* What Are the Rules */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Heart style={{ width: '18px', height: '18px' }} className="text-gold" />
          What Are the Basic Rules?
        </h3>
        <ul style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem',
          paddingLeft: '1.75rem'
        }}>
          {explanation.whatAreTheRules.map((rule, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '0.75rem'
              }}
            >
              <div 
                className="rounded-full text-white"
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  background: '#D49E37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                {index + 1}
              </div>
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  paddingTop: '0.125rem',
                  lineHeight: '1.7'
                }}
              >
                {rule}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* How Do Courts Decide */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Lightbulb style={{ width: '18px', height: '18px' }} className="text-gold" />
          How Do Courts Decide These Cases?
        </h3>
        <p 
          className="text-grey-dark"
          style={{ 
            fontSize: '0.9375rem',
            lineHeight: '1.8',
            paddingLeft: '1.75rem'
          }}
          dangerouslySetInnerHTML={{ __html: explanation.howDoCourtsDecide }}
        />
      </div>

      {/* What Can Happen */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 
          className="text-navy"
          style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Info style={{ width: '18px', height: '18px' }} className="text-gold" />
          What Can Happen Next?
        </h3>
        <p 
          className="text-grey-dark"
          style={{ 
            fontSize: '0.9375rem',
            lineHeight: '1.8',
            paddingLeft: '1.75rem'
          }}
          dangerouslySetInnerHTML={{ __html: explanation.whatCanHappen }}
        />
      </div>

      {/* Remember */}
      <div 
        className="rounded-xl"
        style={{ 
          background: 'rgba(59, 130, 246, 0.08)',
          padding: '1.25rem',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.875rem'
        }}
      >
        <Sparkles 
          style={{ 
            width: '20px', 
            height: '20px', 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#2563EB'
          }} 
        />
        <div>
          <h4 
            style={{ 
              color: '#1E40AF',
              fontSize: '0.9375rem',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}
          >
            Remember!
          </h4>
          <p 
            style={{ 
              fontSize: '0.875rem', 
              color: '#1E3A8A', 
              lineHeight: '1.7' 
            }}
          >
            This explains how the <strong>law works</strong> in England & Wales in simple terms. It's not advice about what <strong>you</strong> should do. 
            Every situation is different, so it's best to talk to a solicitor who can look at your specific details and give you proper advice. 
            JAIDE helps you understand the legal world so you're ready to have that conversation! You can also get free advice from Citizens Advice.
          </p>
        </div>
      </div>
    </div>
  );
}
