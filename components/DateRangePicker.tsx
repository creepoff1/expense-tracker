"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDateRangePresets, formatDateForInput } from "@/lib/utils";

interface DateRangePickerProps {
  from?: string;
  to?: string;
  onRangeChange: (from: string | undefined, to: string | undefined) => void;
}

export function DateRangePicker({ from, to, onRangeChange }: DateRangePickerProps) {
  const [customFrom, setCustomFrom] = useState(from || "");
  const [customTo, setCustomTo] = useState(to || "");
  const [showCustom, setShowCustom] = useState(false);

  const presets = getDateRangePresets();

  const handlePresetClick = (presetName: string) => {
    const preset = presets[presetName as keyof typeof presets];
    if (preset) {
      onRangeChange(
        formatDateForInput(preset.from),
        formatDateForInput(preset.to)
      );
      setShowCustom(false);
    }
  };

  const handleCustomSubmit = () => {
    onRangeChange(
      customFrom || undefined,
      customTo || undefined
    );
    setShowCustom(false);
  };

  const handleClear = () => {
    onRangeChange(undefined, undefined);
    setCustomFrom("");
    setCustomTo("");
    setShowCustom(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(presets).map((presetName) => (
          <Button
            key={presetName}
            variant="outline"
            size="sm"
            onClick={() => handlePresetClick(presetName)}
            className={
              from && to && 
              formatDateForInput(presets[presetName as keyof typeof presets].from) === from &&
              formatDateForInput(presets[presetName as keyof typeof presets].to) === to
                ? "bg-primary text-primary-foreground"
                : ""
            }
          >
            {presetName}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCustom(!showCustom)}
        >
          Custom
        </Button>
        {(from || to) && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
          >
            Clear
          </Button>
        )}
      </div>

      {showCustom && (
        <div className="border rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="custom-from">From</Label>
              <Input
                id="custom-from"
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="custom-to">To</Label>
              <Input
                id="custom-to"
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowCustom(false)}>
              Cancel
            </Button>
            <Button onClick={handleCustomSubmit}>
              Apply
            </Button>
          </div>
        </div>
      )}

      {(from || to) && (
        <div className="text-sm text-muted-foreground">
          {from && to ? (
            <>
              {new Date(from).toLocaleDateString()} - {new Date(to).toLocaleDateString()}
            </>
          ) : from ? (
            <>From {new Date(from).toLocaleDateString()}</>
          ) : (
            <>Until {new Date(to!).toLocaleDateString()}</>
          )}
        </div>
      )}
    </div>
  );
}
