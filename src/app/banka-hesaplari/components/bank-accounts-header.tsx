"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Building2, CheckCircle, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Globe } from "lucide-react";

export function BankAccountsHeader() {
  const t = useTranslations("bankAccounts");

  const handleShare = async () => {
    try {
      await navigator.share({
        title: t("pageTitle"),
        text: t("shareText"),
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success(t("linkCopied"));
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Building2 className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            {t("pageTitle")}
          </h1>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          {t("pageDescription")}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t("secureTransactions")}
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            {t("verifiedAccounts")}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="ml-2"
          >
            <Share2 className="h-4 w-4 mr-1" />
            {t("share")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Güvenli</h3>
              <p className="text-sm text-gray-600">
                Tüm hesaplarımız banka tarafından doğrulanmış ve güvenli işlemler
                için optimize edilmiştir.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Zap className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hızlı</h3>
              <p className="text-sm text-gray-600">
                7/24 aktif hesaplarımız ile istediğiniz zaman bağış yapabilirsiniz.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Çoklu Para Birimi</h3>
              <p className="text-sm text-gray-600">
                TRY, USD ve EUR para birimlerinde hesaplarımız mevcuttur.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
