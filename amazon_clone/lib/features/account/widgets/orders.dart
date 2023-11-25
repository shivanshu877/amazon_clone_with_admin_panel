import 'package:amazon_clone/constants/global_variables.dart';
import 'package:amazon_clone/features/account/widgets/single_product.dart';
import 'package:flutter/material.dart';

class Orders extends StatefulWidget {
  const Orders({Key? key}) : super(key: key);

  @override
  State<Orders> createState() => _OrdersState();
}

class _OrdersState extends State<Orders> {
  List list = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ign.com%2Fwikis%2Fthe-legend-of-zelda-tears-of-the-kingdom%2FLink&psig=AOvVaw2WAr_KiX7G9wi1xWW5MzZc&ust=1701023224548000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODK9Mbj34IDFQAAAAAdAAAAABAD',
  ];
  @override
  Widget build(BuildContext context) {
    // return orders == null
    //     ? const Loader()
    //     :
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              padding: const EdgeInsets.only(
                left: 15,
              ),
              child: const Text(
                'Your Orders',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.only(
                right: 15,
              ),
              child: Text(
                'See all',
                style: TextStyle(
                  color: GlobalVariables.selectedNavBarColor,
                ),
              ),
            ),
          ],
        ),
        // display orders
        Container(
          height: 170,
          padding: const EdgeInsets.only(
            left: 10,
            top: 20,
            right: 0,
          ),
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: list.length,
            itemBuilder: (context, index) {
              return SingleProduct(image: list[index]);
            },
          ),
        ),
      ],
    );
  }
}
