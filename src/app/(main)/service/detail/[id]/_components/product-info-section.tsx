"use client";

import crewOnlyImage from "@/assets/images/product/crew-product-detail.jpg";
import { PageTitle } from "@/components/layout/page-title";
import { ColoredIcon } from "@/components/shared/colored-icon";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import { CATEGORY } from "@/constants/enum";
import { useSession } from "@/features/auth/use-session";
import { useDialog } from "@/hooks/use-dialog";
import { storage } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { usePageContext } from "../_context";
import { ProductReviewAddDialog } from "./product-review-add-dialog";
import { ProductReviewList } from "./product-review-list";

export const ProductInfoSection = () => {
  const productReviewAddDialog = useDialog();

  const { session } = useSession();

  const { product, reviews } = usePageContext();

  const isCrewOnly = product.price === 0;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full border-b py-4">
        <PageTitle title="상세 정보" />
      </div>
      <div className="flex w-full max-w-4xl flex-1 flex-col">
        <div className="mt-4 flex max-w-4xl flex-col items-center">
          {isCrewOnly && (
            <Image width={896} height={896} src={crewOnlyImage} alt="크루 전용 자료" unoptimized />
          )}
          {product.detailImageUrls.map((detailImageUrl) => (
            <Image
              key={detailImageUrl}
              unoptimized
              priority
              width={896}
              height={4000}
              className="h-auto w-full rounded-lg"
              src={storage.getFileUrl(detailImageUrl)}
              alt="상세 정보 이미지"
            />
          ))}
        </div>
        {product.faqs.length > 0 && (
          <div>
            <PageTitle title="Q&A" />
            <Accordion className="mt-4" type="single" collapsible>
              {product.faqs.map((faq, index) => (
                <Accordion.Item key={index} value={String(index)} className="ml-2 md:ml-0">
                  <Accordion.Trigger>
                    <div className="my-1 flex gap-2">
                      <p className="mr-4 flex-1 text-left">
                        {index + 1}. {faq.title}
                      </p>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="ml-1 whitespace-pre-wrap">
                    {faq.content}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        )}
        {/* TODO: 임시 링크 삭제  */}
        {product.category.name === CATEGORY.PARTIAL_CONSULTING && (
          <div className="flex flex-col items-center pb-[120px] pt-24">
            <div className="rounded-full bg-content-light p-4">
              <ColoredIcon.Support className="size-8" />
            </div>
            <p className="mt-4 text-xl font-semibold">서류 대행 관련 문의</p>
            <p className="mt-2 text-sub">
              서류 대행 관련 문의사항은 아래 링크를 통해 카카오톡 오픈채팅으로 문의해주세요.
            </p>
            <Link
              className="mt-8 flex items-center gap-4 text-nowrap rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              href={siteConfig.links.kakao}
              target="_blank"
            >
              서류 대행 문의하기
            </Link>
          </div>
        )}
        {/* TODO: 하드코딩 수정  */}
        {product.price === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mt-2 text-sub">
              크루 가입 문의는 아래 링크를 통해 카카오톡 오픈채팅으로 문의해주세요.
            </p>
            <Link
              className="mt-8 flex items-center gap-4 text-nowrap rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
              href={siteConfig.links.kakao}
            >
              크루 가입 문의
            </Link>
          </div>
        )}
        <div className="relative">
          <PageTitle title="리뷰">
            {reviews && <span className="ml-2 text-primary">{reviews.length}</span>}
          </PageTitle>
          {session && (
            <Button
              className="absolute bottom-0 right-0"
              variant="outlined"
              onClick={productReviewAddDialog.open}
            >
              리뷰 쓰기
            </Button>
          )}
          <ProductReviewAddDialog
            productId={product.id}
            isOpen={productReviewAddDialog.isOpen}
            onOpenChange={productReviewAddDialog.onOpenChange}
            onClose={productReviewAddDialog.close}
          />
        </div>
        <ProductReviewList />
      </div>
    </div>
  );
};
