import compareimagelogo from '~/assets/images/compareimagelogo.png'

export const Comparigen = () => {
  return (
    <section className="bg-[#F8F2E8] py-[50px]">
      <div className="container-small grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[30px]">
        <div className="border-[5px] border-[#FFF] sm:p-[30px] p-[15px]">
          <div className="text-center font-hudson text-[#BF4745] text-[24px] font-[620] tracking-[1.2px] leading-normal uppercase md:w-[70%] mb-[20px] m-auto">
            Other meal prep companies
          </div>
          <div>
            <ul className="text-[16px] list-disc pl-[30px] text-[#231B19] font-medium leading-normal uppercase flex flex-col gap-[10px]">
              <li>You buy a refrigerator or freezer.</li>
              <li>You stock the products from the company.</li>
              <li>
                Your members can only choose the meals that are physically
                available.
              </li>
              <li>Only 1-2 flavors available a week.</li>
              <li>
                If your members don’t like the meals, you’re stuck with products
                people don’t want.
              </li>
              <li>
                More of a novelty built on convenience than a sustainable
                nutrition solution.
              </li>
              <li>Microwaveable meals = bland, rubbery taste. </li>
            </ul>
          </div>
        </div>
        <div className="border-[5px] border-[#FFF] sm:p-[30px] p-[15px] bg-[#fff]">
          <div className="text-center font-hudson text-[#BF4745] text-[24px] font-[620] tracking-[1.2px] leading-normal uppercase mb-[20px]">
            <img src={compareimagelogo} className="m-auto" />
          </div>
          <div>
            <ul className="text-[16px] list-disc pl-[30px] text-[#231B19] font-bold leading-normal uppercase flex flex-col gap-[10px]">
              <li>No fridge, freezer, or onsite storage.</li>
              <li>No backend management.</li>
              <li>Orders are delivered straight to the customer.</li>
              <li>15 meats to choose from, with a BBQ line coming soon.</li>
              <li>No overhead fees.</li>
              <li>
                100% natural meats, locally sourced and prepared by
                award-winning chefs.
              </li>
              <li>Restaurant-quality meats at grocery store prices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
