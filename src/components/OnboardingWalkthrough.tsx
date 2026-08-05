import { useEffect, useState, useCallback } from 'react';
import { Sparkles, X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

const STORAGE_KEY = 'gharpayy.onboarding.completed.v1';

const STEPS = [
  {
    step: 1,
    title: 'Welcome to Gharpayy Arena Infrastructure',
    body: 'One unified operating layer for HR, Flow Ops, TCM, and Property Owners. Every action triggers the next step seamlessly — no module works in isolation.',
    cta: { label: 'Explore Platform Overview', path: '/help' },
  },
  {
    step: 2,
    title: '1. Owners Update Rooms Daily',
    body: 'Daily Inventory Truth: 9:30 AM open · Automated reminders at 11 AM, 2 PM, and 7 PM · 10 PM lock applied only after warnings.',
    cta: { label: 'Inspect Owner Portal', path: '/owner' },
  },
  {
    step: 3,
    title: '2. Flow Ops Activates New Rooms',
    body: 'Every new room must receive 5 pitches or 2 qualified matches within 2 hours. Stale rooms automatically surface in the War Room.',
    cta: { label: 'Inspect Flow Ops Desk', path: '/myt/flow-ops' },
  },
  {
    step: 4,
    title: '3. TCM Conducts Visits & Reports',
    body: 'Each physical visit ties directly to a specific room ID. Post-visit forms capture buyer objections and feed owner intelligence analytics.',
    cta: { label: 'Inspect TCM Desk', path: '/myt/tcm' },
  },
  {
    step: 5,
    title: '4. Full Transparency & Closed-Loop Operations',
    body: 'Owner updates → Team tasks → Real-time visibility for HR & Leadership. Zero blind selling, zero stale inventory.',
    cta: { label: 'Launch Dashboard Workspace', path: '/leads' },
  },
];

export function OnboardingWalkthrough() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, '1');
    }
    setOpen(false);
  }, []);

  const handleResetAndOpen = useCallback(() => {
    setStep(0);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user has already completed onboarding
    const done = localStorage.getItem(STORAGE_KEY);
    if (!done) {
      setOpen(true);
    }

    // Listen for custom trigger to re-open onboarding from anywhere
    const handleReopen = () => handleResetAndOpen();
    window.addEventListener('open-onboarding', handleReopen);
    return () => window.removeEventListener('open-onboarding', handleReopen);
  }, [handleResetAndOpen]);

  // Keyboard accessibility: Escape, Right Arrow, Left Arrow, Enter
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (step < STEPS.length - 1) {
          setStep((prev) => prev + 1);
        } else {
          handleClose();
          navigate({ to: '/leads' });
        }
      } else if (e.key === 'ArrowLeft') {
        if (step > 0) {
          setStep((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, step, handleClose, navigate]);

  if (!open) return null;

  const currentStep = STEPS[step];
  const isFirstStep = step === 0;
  const isLastStep = step === STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      handleClose();
      navigate({ to: '/leads' });
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleCtaClick = (path: string) => {
    handleNext();
    if (path && path !== '/help') {
      navigate({ to: path as any });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200"
    >
      <div className="w-full max-w-lg rounded-2xl border border-border/80 bg-card shadow-2xl overflow-hidden text-card-foreground transform transition-all">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-accent/15 text-accent flex items-center justify-center font-bold text-xs">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Gharpayy Onboarding
              </span>
              <p className="text-xs font-mono font-medium text-foreground">
                Step {step + 1} of {STEPS.length}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close walkthrough"
            className="cursor-pointer rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="onboarding-title" className="font-display text-xl font-bold tracking-tight text-foreground">
              {currentStep.title}
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {currentStep.body}
          </p>

          {/* Interactive Action Chip */}
          <div className="pt-1">
            <button
              onClick={() => handleCtaClick(currentStep.cta.path)}
              className="cursor-pointer group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent font-medium text-xs border border-accent/20 transition-all shadow-xs"
            >
              <span>{currentStep.cta.label}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Step Dots & Progress Bar */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between gap-1.5">
              {STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setStep(idx)}
                  className={`cursor-pointer h-2 flex-1 rounded-full transition-all ${
                    idx === step
                      ? 'bg-accent shadow-xs'
                      : idx < step
                      ? 'bg-accent/50'
                      : 'bg-muted/80'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="px-6 py-4 border-t border-border/60 bg-muted/20 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="cursor-pointer text-muted-foreground hover:text-foreground text-xs"
          >
            Skip Walkthrough
          </Button>

          <div className="flex items-center gap-2">
            {!isFirstStep && (
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                className="cursor-pointer gap-1 text-xs"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </Button>
            )}

            <Button
              size="sm"
              onClick={handleNext}
              className="cursor-pointer gap-1.5 text-xs font-semibold shadow-xs"
            >
              {isLastStep ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Finish & Launch CRM
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
