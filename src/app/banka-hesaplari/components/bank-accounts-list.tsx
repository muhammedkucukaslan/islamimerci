"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

interface BankAccount {
  id: string;
  bankName: string;
  accountName: string;
  iban: string;
  accountNumber?: string;
  swiftCode?: string;
  bankCode?: string;
  currency: "TRY" | "USD" | "EUR";
  type: "checking" | "savings";
}

const accounts: BankAccount[] = [
  // Add your bank accounts here
];

export default function BankAccountsList() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Important Notes */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Önemli Notlar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            • Bağış yaparken mutlaka açıklama kısmına adınızı ve iletişim bilgilerinizi yazınız.
          </p>
          <p className="text-sm">
            • Yurt dışından bağış yapacak olanlar için USD ve EUR hesaplarımızı kullanabilirsiniz.
          </p>
          <p className="text-sm">
            • Herhangi bir sorun yaşamanız durumunda bizimle iletişime geçebilirsiniz.
          </p>
        </CardContent>
      </Card>

      {/* Bank Accounts */}
      <div className="grid gap-4">
        {accounts.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-600">
                Derneğimizin açıktan IBAN paylaşma izni yoktur. Bağış yapmak istediğiniz hizmetinizle ilgili IBAN'ı Instagram DM'den mesaj atarak öğrenebilirsiniz.
              </p>
            </CardContent>
          </Card>
        ) : (
          accounts.map((account) => (
            <Card key={account.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{account.bankName}</CardTitle>
                    <CardDescription>
                      {account.type === "checking" ? "Vadesiz" : "Vadeli"} • {account.currency}
                    </CardDescription>
                  </div>
                  <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Aktif
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Hesap Adı</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{account.accountName}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(account.accountName, `${account.id}-name`)}
                    >
                      {copiedId === `${account.id}-name` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">IBAN</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm break-all">{account.iban}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(account.iban, `${account.id}-iban`)}
                    >
                      {copiedId === `${account.id}-iban` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {account.accountNumber && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Hesap Numarası</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{account.accountNumber}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(account.accountNumber!, `${account.id}-account`)}
                      >
                        {copiedId === `${account.id}-account` ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {account.swiftCode && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">SWIFT Kodu</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{account.swiftCode}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(account.swiftCode!, `${account.id}-swift`)}
                      >
                        {copiedId === `${account.id}-swift` ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {account.bankCode && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Banka Kodu</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{account.bankCode}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(account.bankCode!, `${account.id}-bank`)}
                      >
                        {copiedId === `${account.id}-bank` ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
