import PlanDetailsPage from "@/components/module/plan&package/planDetails";
import { getSingleMealsPlans } from "@/services/mealPlan";
import React from "react";

const DynamicPlanPage = async ({
  params,
}: {
  params: Promise<{ planId: string }>;
}) => {
  const mealId = (await params).planId;
  const planData = await getSingleMealsPlans(mealId);
  
  return <div className="px-6 md:px-12 lg:px-20">
    <PlanDetailsPage data={planData?.data}/>
  </div>;
};

export default DynamicPlanPage;
