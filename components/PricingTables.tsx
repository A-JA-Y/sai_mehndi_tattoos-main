import { nailArtPricing, tattooPricing, tattooPricingNote } from "@/lib/data";

export function TattooPricingTable() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {tattooPricing.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-ink/10 bg-coal p-6 sm:p-7"
          >
            <h3 className="font-serif text-xl text-henna">{group.label}</h3>
            <p className="mt-1 text-[14px] tracking-wide text-sand uppercase">
              {group.note}
            </p>
            {group.base && (
              <p className="mt-4 text-[15px] text-ink/90">
                {group.base.label}:{" "}
                <span className="font-semibold text-ink">
                  ₹{group.base.amount.toLocaleString("en-IN")}
                </span>
              </p>
            )}
            <ul className="mt-4 space-y-3 border-t border-ink/10 pt-4">
              {group.rates.map((rate) => (
                <li
                  key={rate.tier}
                  className="flex items-center justify-between text-[17px]"
                >
                  <span className="text-sand">{rate.tier}</span>
                  <span className="font-semibold text-ink">
                    ₹{rate.rate.toLocaleString("en-IN")}
                    <span className="text-[13px] text-sand">{rate.unit}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[13px] tracking-[0.2em] text-sand uppercase">
        {tattooPricingNote}
      </p>
    </div>
  );
}

export function NailArtPricingTable() {
  return (
    <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
      {nailArtPricing.map((item) => (
        <div
          key={item.service}
          className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-coal px-5 py-4"
        >
          <span className="text-[15px] text-ink/90">{item.service}</span>
          <span className="shrink-0 font-serif text-lg text-henna">
            ₹{item.price.toLocaleString("en-IN")}
          </span>
        </div>
      ))}
    </div>
  );
}
